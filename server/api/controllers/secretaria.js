var models  = require('../models');

module.exports = {
  getSecretarias: (req, res)=>{
    models.Secretaria.findAll({
    }).then(function(lista) {
      res.json({secretarias: lista});
    });
  }
}
