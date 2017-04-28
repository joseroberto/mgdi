var models  = require('../models');

module.exports = {
  getTagCategoria: (req, res)=>{
    models.TagCategoria.findAll({
      include: [ { model: models.Tag, as: 'Tags' } ]
    }).then(function(lista) {
      res.json({tag_categorias: lista});
    });
  }
}
