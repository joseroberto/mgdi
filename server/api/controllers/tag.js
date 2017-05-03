var models  = require('../models');

module.exports = {
  getTags: (req, res)=>{
    models.Tag.findAll({
      include: [ { model: models.TagCategoria, as: 'Categoria' } ]
    }).then(function(lista) {
      res.json({tags: lista});
    });
  }
}
