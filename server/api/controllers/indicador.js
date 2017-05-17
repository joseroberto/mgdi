require('../extensions/array');
var models  = require('../models');

module.exports = {
  getIndicadores: (req, res)=>{
    models.Indicador.findAll({
      attributes: [ 'codigo', 'titulo', 'descricao', 'periodicidade', 'unidade_medida',
        'ativo',  'acumulativo', 'privado', 'conceituacao' ],
      order: ['titulo']
    }).then(function(lista) {
      //console.log(lista);
      res.json({indicadores: lista});
    });
  },
  createIndicador: (req,res)=>{
    console.log('create', req.body);
    models.Indicador.create(req.body).then((indicador)=> {
      indicador.setTags(req.body.tags);
      res.json({codret: 0, mensagem: "Indicador cadastrado com sucesso"});
    });
  },
  getIndicador: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo.value,
      { include: [ { model: models.Tag, as: 'Tags' },
                   { model: models.Indicador, as: 'IndicadoresRelacionados' },
                   { model: models.CategoriaAnalise , as: 'CategoriasAnalise' }] }
    ).then((indicador)=> {
      res.json(indicador);
    });
  },
  deleteIndicador: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo.value).then((indicador)=>{
      indicador.setTags(null);
      indicador.destroy();
      res.json({codret: 0, mensagem: "Indicador apagado com sucesso"});
    });
  },
  editaIndicador: (req,res)=>{
    console.log(req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      models.Indicador.findById(req.swagger.params.codigo.value).then( item=>{
        item.setTags(req.body.tags);
        res.json({codret: 0, mensagem: "Indicador atualizado com sucesso"});
      });
    });
  },
  updateConceituacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Conceituação do indicador ${req.swagger.params.codigo.value} atualizada com sucesso`});
    });
  },
  updateInterpretacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Interpretação do indicador ${req.swagger.params.codigo.value} atualizada com sucesso`});
    });
  },
  updateUso: (req,res)=>{
    console.log(req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Usos do indicador ${req.swagger.params.codigo.value} atualizados com sucesso`});
    });
  },
  updateLimitacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Limitações do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    });
  },
  updateObservacao: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Observações do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    });
  },
  updateNota: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Notas do indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    });
  },
  updateProcedimentoOperacional: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Procedimento operacional para o indicador ${req.swagger.params.codigo.value} atualizadas com sucesso`});
    });
  },
  updateFonteDados: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Fonte de dados do indicador ${req.swagger.params.codigo.value} atualizado com sucesso`});
    });
  },

  updateMetodoCalculo: (req,res)=>{
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      res.json({codret: 0, mensagem: `Método de Cálculo do indicador ${req.swagger.params.codigo.value} atualizado com sucesso`});
    });
  },

  addCategoriaAnalise: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo.value).then( item=>{
      item.addCategoriasAnalise(req.swagger.params.categoria_analise.value);
      res.json({codret: 0, mensagem: "Categoria de análise adicionada com sucesso"});
    });
  },

  deleteCategoriaAnalise: (req,res)=>{
    console.log({
      co_indicador:req.swagger.params.codigo.value,
      co_categoria_analise:req.swagger.params.categoria_analise.value});
    models.IndicadorCategoriaAnalise.destroy({ where: {
      co_indicador:req.swagger.params.codigo.value,
      co_categoria_analise:req.swagger.params.categoria_analise.value}}).then(()=>{
        res.json({codret: 0, mensagem: "Relação do indicador com a categoria de análise retirada com sucesso"});
    });
  },

  addIndicadorRelacionado: (req,res)=>{
    models.Indicador.findById(req.swagger.params.codigo_pai.value).then( item=>{
      item.addIndicadoresRelacionados(req.swagger.params.codigo.value);
      res.json({codret: 0, mensagem: "Indicador relacionado adicionado com sucesso"});
    });
  },

  deleteIndicadorRelacionado: (req,res)=>{
    models.IndicadorRelacionado.destroy(
      { where: { co_indicador:req.swagger.params.codigo.value,
        co_indicador_pai:req.swagger.params.codigo_pai.value}}).then(()=>{
        res.json({codret: 0, mensagem: "Relação apagada com sucesso"});
    });
  }
}
