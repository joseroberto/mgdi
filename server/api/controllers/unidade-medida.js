var models  = require('../models');

module.exports = {
  getUnidadesMedida: (req, res)=>{
    models.UnidadeMedida.findAll({
    }).then(function(lista) {
      res.json({unidades: lista});
    });
  },
  getUnidadesMedidaItem: (req,res)=>{
    models.UnidadeMedida.findAll(
      {where: {codigo: req.swagger.params.codigo.value}}
    ).then((unidade)=> {
      if(unidade && unidade.length>0)
          res.json(unidade[0]);
    });
  },
  createUnidadeMedida: (req,res)=>{
    models.UnidadeMedida.create(req.body).then((indicador)=> {
      res.json({codret: 0, mensagem: "Unidade de Medida cadastrada com sucesso"});
    }).catch(err=>{
      console.log('Erro', err);
    });
  },
  editaUnidadeMedida: (req,res)=>{
    //console.log(req.body);
    models.UnidadeMedida.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {

    });
  },
  apagaUnidadeMedida: (req,res)=>{
    models.UnidadeMedida.findAll({where: {codigo: req.swagger.params.codigo.value}}).then((resp)=>{

    });
  }
}
