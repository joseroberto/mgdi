var models  = require('../models');

module.exports = {
  getCategoriasAnalises: (req, res)=>{
    models.CategoriaAnalise.findAll({
    }).then(function(lista) {
      res.json({categorias_analise: lista});
    });
  }
}
