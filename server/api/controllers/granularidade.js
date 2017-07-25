var models  = require('../models');

module.exports = {
  getGranularidade: (req, res)=>{
    models.Granularidade.findAll({
    }).then(function(lista) {
      res.json({granularidade: lista});
    });
  }
}
