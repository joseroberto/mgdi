const models  = require('../models');

module.exports = {
  getUf: (req, res)=>{
    models.Uf.findAll({
      where: { codigo: {$gt: 0, $lt: 90}}
    }).then(function(lista) {
      res.json(lista);
    });
  }
}
