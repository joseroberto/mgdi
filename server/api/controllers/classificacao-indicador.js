var models  = require('../models');

module.exports = {
  getClassificacoes: (req, res)=>{
    models.ClassificacaoIndicador.findAll({
      order: [ [ 'descricao', 'ASC' ]]
    }).then(function(lista) {
      res.json({classificacoes: lista});
    });
  }
}
