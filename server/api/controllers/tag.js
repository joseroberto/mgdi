var models  = require('../models');

module.exports = {
  getTags: (req, res)=>{
    models.Tag.findAll({
    }).then(function(lista) {
      res.json({tags: lista});
    });
  }
}
