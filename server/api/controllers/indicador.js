var models  = require('../models');

module.exports = {
  getIndicadores: (req, res)=>{
    models.Indicador.findAll({
    }).then(function(lista) {
      res.json({indicadores: lista});
    });
  },
  createIndicador: (req,res)=>{
    models.Indicador.create(req.body).then((indicador)=> {
      res.json({codret: 0, mensagem: "Indicador cadastrado com sucesso"});
    });
  },
  getIndicador: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo.value).then((indicador)=> {
      res.json(indicador);
    });
  },
  deleteIndicador: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo.value).then((indicador)=>{
      indicador.destroy();
      res.json({codret: 0, mensagem: "Indicador apagado com sucesso"});
    });
  },
  editaIndicador: (req,res)=>{
    console.log(req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: "Indicador atualizado com sucesso"});
    })
  }
}
