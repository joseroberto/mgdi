var models  = require('../models');

module.exports = {
  getCategoriasAnalises: (req, res)=>{
    models.CategoriaAnalise.findAll({
      include: [ { model: models.CategoriaAnaliseItem, as: 'Itens' }]
    }).then(function(lista) {
      res.json({categorias_analise: lista});
    });
  }
}
