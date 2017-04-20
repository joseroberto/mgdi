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
    console.log(req.swagger.params.codigo.value);
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
    models.Indicador.update({ codigo: req.swagger.params.codigo.value}, req.body).then(() => {
      res.json({codret: 0, mensagem: "Indicador atualizado com sucesso"});
    })
  }
}
