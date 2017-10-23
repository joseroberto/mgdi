var models  = require('../models');

module.exports = {
  getTagCategoria: (req, res)=>{
    models.TagCategoria.findAll({
      include: [ { model: models.Tag, as: 'Tags' } ]
    }).then(function(lista) {
      res.json({tag_categorias: lista});
    });
  },
  getTagCategoriaItem: (req,res)=>{
    models.TagCategoria.findAll(
      { include: [ { model: models.Tag, as: 'Tags' }],
        where: {codigo: req.swagger.params.codigo.value}
      }
    ).then((categoria)=> {
      if(categoria && categoria.length>0)
          res.json(categoria[0]);
    });
  },
  createTagCategoria: (req,res)=>{
    models.TagCategoria.create(req.body).then((indicador)=> {
      if(req.body.tags)
        indicador.setTags(req.body.tags);
      res.json({codret: 0, mensagem: "Grupo de marcadores cadastrado com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
    });
  },
  editaTagCategoria: (req,res)=>{
    //console.log(req.body);
    models.TagCategoria.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {

    });
  },
  apagaTagCategoria: (req,res)=>{
    models.TagCategoria.findAll({where: {codigo: req.swagger.params.codigo.value}}).then((resp)=>{

    });
  }
}
