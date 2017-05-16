var models  = require('../models');

module.exports = {
  getBancoDados: (req, res)=>{
    models.BancoDados.findAll({
    }).then(function(lista) {
      res.json({banco_dados: lista});
    });
  }
}
