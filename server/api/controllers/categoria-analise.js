var models  = require('../models');

module.exports = {
  getCategoriasAnalises: (req, res)=>{
    models.CategoriaAnalise.findAll({
      include: [ { model: models.CategoriaAnaliseItem, as: 'Itens' }]
    }).then(function(lista) {
      res.json({categorias_analise: lista});
    });
  },
  getCategoriaAnalise: (req,res)=>{
    models.CategoriaAnalise.findAll(
      { include: [ { model: models.CategoriaAnaliseItem, as: 'Itens' }],
        where: {codigo: req.swagger.params.codigo.value}
      }
    ).then((categoria)=> {
      if(categoria && categoria.length>0)
          res.json(categoria[0]);
    });
  },
  createCategoriaAnalise: (req,res)=>{
    models.CategoriaAnalise.create(req.body).then((indicador)=> {
      if(req.body.tags)
        indicador.setTags(req.body.tags);
      res.json({codret: 0, mensagem: "Categoria de Análise cadastrada com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
    });
  },
  editaCategoriaAnalise: (req,res)=>{
    //console.log(req.body);
    models.CategoriaAnalise.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {

    });
  },
  apagaCategoriaAnalise: (req,res)=>{
    models.CategoriaAnalise.findAll({where: {codigo: req.swagger.params.codigo.value}}).then((resp)=>{

    });
  }
}
