var models  = require('../models');

module.exports = {
  getTagCategoria: (req, res)=>{
    models.TagCategoria.findAll({
    }).then(function(lista) {
      res.json({tag_categorias: lista});
    });
  }
}
