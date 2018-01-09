var models  = require('../models');

module.exports = {
  getPerfis: (req, res)=>{
    models.Perfil.findAll({
      where:{
        ativo:true
      }
    }).then(function(lista) {
      res.json({perfis: lista});
    });
  },
  getPerfilPorSigla: async (sigla)=>{
    return models.Perfil.findAll({
      where:{
        ativo:true,
        sigla:sigla
      }
    });
  }
}
