var models  = require('../models');

module.exports = {
  getUnidadesMedida: (req, res)=>{
    models.UnidadeMedida.findAll({
    }).then(function(lista) {
      res.json({unidades: lista});
    });
  }
}
