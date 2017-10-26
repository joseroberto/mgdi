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
    models.CategoriaAnalise.create(req.body)
    .then((categoria)=> {
      if(req.body.Itens){
        var promises = [];
        req.body.Itens.forEach((item)=>{
          item['CategoriaCodigo'] = categoria.codigo;
          promises.push(models.CategoriaAnaliseItem.create(item));
        });
        Promise.all(promises).then(result=>{
            res.json({codret: 0, mensagem: "Categoria de Análise e itens cadastrados com sucesso"});
        }).catch(err=>{
          console.log('Erro', err);
          res.status(503).json(err);
        });
      }else{
        res.json({codret: 0, mensagem: "Categoria de Análise cadastrada com sucesso"});
      }
    })
    .catch(err=>{
      console.log('Erro', err);
      res.status(503).json(err);
    });
  },
  editaCategoriaAnalise: (req,res)=>{
    //console.log(req.body);
    models.CategoriaAnalise.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {

    });
  },
  apagaCategoriaAnalise: (req,res)=>{
    models.CategoriaAnalise.destroy({where: {codigo: req.swagger.params.codigo.value}}).then((resp)=>{
      res.json({codret: 0, mensagem: "Categoria de Análise apagada com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
      if('original' in err){
        console.log('Tratado', {codret: err.original.code, mensagem: err.original.detail});
        res.status(503).json({codret: err.original.code, mensagem: err.original.detail});
      }else{
        res.status(503).json(err);
      }
    });
  }
}
