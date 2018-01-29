var models  = require('../models');
var perfil = require('./perfil');
var status = require('./status-aprovacao');

module.exports = {
  getUsers: (req, res)=>{
    var attr = {
      include: [ { model: models.Unidade, as: 'Unidade' },
        { model: models.Perfil, as: 'Perfil' }
      ],
      where:{}
    };
    if(req.swagger.params.situacao){
      attr.where = {SituacaoCodigo:req.swagger.params.situacao.value};
    }
    models.User.findAll(attr).then(function(lista) {
      res.json({users: lista});
    });
  },
  getPorLogin: async (login)=>{
    return models.User.findAll({
      where: {login:login}
    });
  },
  createSolicitacao: (req,res)=>{
    console.log('Solicitacao de perfil');
    createPerfil(req.body).then((perfil)=> {
      res.json({codret: 0, mensagem: "Solicitação de perfil de acesso cadastrado com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
      res.status(500).json({codret: 1001, message: "Erro no cadastramento da solicitação de perfil"});
    });
  },
  aprovaSolicitacao: (req,res)=>{
    changeSituacao(req.swagger.params.codigo.value, 1).then( item=>{
        res.json({codret: 0, mensagem: "Solicitação de perfil de acesso aprovada com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
      res.status(500).json({codret: 1001, message: "Erro no cadastramento da solicitação de perfil"});
    });
  },
  rejeitaSolicitacao: (req,res)=>{
    changeSituacao(req.swagger.params.codigo.value, 2).then( item=>{
        res.json({codret: 0, mensagem: "Solicitação de perfil de acesso rejeitada com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
      res.status(500).json({codret: 1001, message: "Erro no cadastramento da solicitação de perfil"});
    });
  }
}

function changeSituacao(codigo, situacao){
  return models.User.findAll({where: {codigo: codigo}}).map(resp=>{
      resp.SituacaoCodigo = situacao;
      resp.save();
  });
}

async function createPerfil(entidade){
  var numPerfil = await models.User.count();
  entidade['SituacaoCodigo'] = 0;

  // Checa se nao tem perfil cadastrado e coloca o primeiro como ADM
  if(numPerfil==0){
    var vlPerfil = await perfil.getPerfilPorSigla('ADM');
    entidade['PerfilCodigo'] = vlPerfil[0].dataValues.codigo;
    entidade['SituacaoCodigo'] = 1; // Aprovado
  }

  //console.log('create', entidade);
  return models.User.upsert(entidade);
}
