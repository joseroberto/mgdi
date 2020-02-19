const models  = require('../models');
const perfil = require('./perfil');
const status = require('./status-aprovacao');
const jwt    = require('jsonwebtoken');
const config_param = require('../helpers/config')();

module.exports = {

  getUsers: (req, res)=>{
    var attr = {
      include: [ { model: models.Unidade, as: 'Unidade' },
        { model: models.Perfil, as: 'Perfil' }
      ],
      where:{}
    };
    if(req.swagger.params.situacao.value !== undefined ){
      attr.where = {SituacaoCodigo:req.swagger.params.situacao.value};
    }
    models.User.findAll(attr).then(function(lista) {
      res.json({users: lista});
    });
  },
  getPorId: (req, res)=>{
    models.User.findOne({
      where: {codigo:req.swagger.params.codigo.value}
    }).then(function(user) {
      if(!user){
        res.status(404).json({codret: 1010, message: "Não existe o usuário"});
        return;
      }
      res.json(user)
    })
  },
  getPorLogin: async (login)=>{
    return models.User.findOne({
      where: {login:login}
    });
  },
  getPorLoginAplicacao: async (login, sigla_aplicacao)=>{
    return models.User.findAll({
      include: [ { model: models.Perfil,
          as: 'Perfil',
          include: [{model: models.Aplicacao, as: 'Aplicacao', where: { sigla: sigla_aplicacao } }]
         } ],
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
  },

  getPerfil: (req,res)=>{
    console.log(req.headers.authorization);
    //jwt.verify(token, config_param.secret);
    res.json(req.headers.authorization);
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
