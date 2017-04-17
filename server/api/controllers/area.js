var models  = require('../models');

module.exports = {
  getAreas: (req, res)=>{
    models.Area.findAll({
    }).then(function(lista) {
      res.json({areas: lista});
    });
  }
}
