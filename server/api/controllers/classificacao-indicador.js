var models  = require('../models');

module.exports = {
  getClassificacoes: (req, res)=>{
    models.ClassificacaoIndicador.findAll({
    }).then(function(lista) {
      res.json({classificacoes: lista});
    });
  }
}
