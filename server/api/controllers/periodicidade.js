var models  = require('../models');

module.exports = {
  list: (req, res)=>{
    models.Periodicidade.findAll({
    }).then(function(lista_periodicidades) {
      res.json({periodicidades: lista_periodicidades});
    });
  }
}
