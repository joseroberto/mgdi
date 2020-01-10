var models  = require('../models');

module.exports = {
  getMunicipio: (req, res)=>{
    models.Municipio.findAll({
    }).then(function(lista) {
      res.json(lista);
    });
  }
}
