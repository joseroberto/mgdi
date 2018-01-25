var models  = require('../models');

module.exports = {
  getFontesParametro: (req, res)=>{
    models.ParametroFonte.findAll({
      order: [ [ 'sigla', 'ASC' ]]
    }).then(function(lista) {
      res.json({fontes: lista});
    });
  }
}
