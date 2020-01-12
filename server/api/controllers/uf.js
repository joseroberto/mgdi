var models  = require('../models');

module.exports = {
  getUf: (req, res)=>{
    models.Uf.findAll({
    }).then(function(lista) {
      res.json(lista);
    });
  }
}
