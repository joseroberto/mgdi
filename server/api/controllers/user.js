var models  = require('../models');

module.exports = {
  getUsers: (req, res)=>{
    models.User.findAll({
    }).then(function(lista) {
      res.json({users: lista});
    });
  },
  getPorLogin: (login)=>{
    return models.User.findAll({
      where: {login:login}
    });
  },
  countPerfil: ()=>{
      return models.User.count();
  },
  createSolicitacao: (req,res)=>{
    var entidade = req.body;
    entidade['PerfilCodigo'] = entidade.Perfil.codigo;
    if(entidade.Unidade){
      entidade['UnidadeCodigo'] = entidade.Unidade.codigo;
    }
    if(entidade.Situacao){
      entidade['SituacaoCodigo'] = entidade.Situacao.codigo;
    }else{
      entidade['SituacaoCodigo'] = 0;
    }
    console.log('create', entidade);
    models.User.create(entidade).then((perfil)=> {
      res.json({codret: 0, mensagem: "Solicitação de perfil de acesso cadastrado com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
      res.status(500).json({codret: 1001, message: "Erro no cadastramento da solicitação de perfil"});
    });
  }
}
