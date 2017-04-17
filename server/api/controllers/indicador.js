var models  = require('../models');

module.exports = {
  getIndicadores: (req, res)=>{
    models.Indicador.findAll({
    }).then(function(lista) {
      res.json({indicadores: lista});
    });
  }
}
