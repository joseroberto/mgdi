var models  = require('../models');

module.exports = {
  getIndicadores: (req, res)=>{
    models.Indicador.findAll({ 
    }).then(function(lista) {
      console.log(lista);
      res.json({indicadores: lista});
    });
  },
  createIndicador: (req,res)=>{
    console.log('Cria', req.body);
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
    console.log('Atualiza', req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: "Indicador atualizado com sucesso"});
    })
  },
  updateConceituacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Conceituação do indicador ${req.swagger.params.codigo.value} atualizada com sucesso`});
    })
  },
  updateInterpretacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Interpretação do indicador ${req.swagger.params.codigo.value} atualizada com sucesso`});
    })
  },
  updateUso: (req,res)=>{
    console.log(req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Usos do indicador ${req.swagger.params.codigo.value} atualizados com sucesso`});
    })
  },
  updateLimitacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Limitações do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    })
  },
  updateObservacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Observações do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    })
  },
  updateNota: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Notas do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    })
  },
  updateFonteDados: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Fonte de dados do indicador ${req.swagger.params.codigo.value} atualizado com sucesso`});
    })
  },
  updateMetodoCalculo: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Método de Cálculo do indicador ${req.swagger.params.codigo.value} atualizado com sucesso`});
    })
  }
}
