require('../extensions/array');
var models  = require('../models');
var sequelize = require('sequelize');

module.exports = {
  getIndicadores: (req, res)=>{
    var attr = {
      attributes: [ 'codigo', 'titulo', 'descricao', 'ativo',  'acumulativo', 'privado', 'conceituacao', 'fonte_dados' ],
      include: [ { model: models.Periodicidade, as: 'PeriodicidadeAtualizacao' },
        { model: models.Periodicidade, as: 'PeriodicidadeAvaliacao' },
        { model: models.Periodicidade, as: 'PeriodicidadeMonitoramento' },
        { model: models.UnidadeMedida, as: 'UnidadeMedida' },
        { model: models.Unidade, as: 'UnidadeResponsavel' },
        //{ model: models.Tag, as: 'Tags'}
      ],
      where: {},
      order: ['titulo']
    };
    //console.log("Usuario autenticado:",req.headers.authorization);
    // Testa autorizacao para forcar filtro
    //if (!req.headers.authorization){
    //    attr.where['privado'] = false;
    //}

    //if(req.swagger.params.limit.value){
    //    attr['limit'] = req.swagger.params.limit.value;
    //} else {
        //BUG: Há um erro no sequelize para consultas com limit e mapeamentos n:n como o caso da Tags
        if(req.swagger.params.tag.value){
            attr.include.push({ model: models.Tag, as: 'Tags', where:{ codigo: req.swagger.params.tag.value}});
        }else{
            attr.include.push({ model: models.Tag, as: 'Tags'});
        }
    //}

    if(req.swagger.params.query.value){
        attr.where['$or'] = [{'titulo':{ '$like': `%${req.swagger.params.query.value}%`}},
                             {'descricao':{ '$like': `%${req.swagger.params.query.value}%`}}];
    }

    if(req.swagger.params.offset.value){
        attr['offset'] = req.swagger.params.offset.value;
    }

    if(req.swagger.params.secretaria.value){
        //console.log('Secretaria: ', req.swagger.params.secretaria.value);
        attr.where['secretaria'] = req.swagger.params.secretaria.value;
    }

    console.log(attr);

    models.Indicador.findAndCountAll(attr).then(function(resp) {
      //TODO: Provisoriamente enquanto o problema do limit na query não é resolvido
      if(req.swagger.params.limit.value){
        resp.rows = resp.rows.slice(0, req.swagger.params.limit.value);
      }
      res.json(resp);
    });
  },
  createIndicador: (req,res)=>{
    //console.log('create', req.body);
    models.Indicador.create(req.body).then((indicador)=> {
      if(req.body.tags)
        indicador.setTags(req.body.tags);
      res.json({codret: 0, mensagem: "Indicador cadastrado com sucesso"});
    });
  },
  getIndicador: (req,res)=>{
    models.Indicador.findAll(
      { include: [ { model: models.Tag, as: 'Tags' },
                   { model: models.Indicador, as: 'IndicadoresRelacionados' },
                   { model: models.CategoriaAnalise , as: 'CategoriasAnalise' },
                    { model: models.Unidade , as: 'UnidadeResponsavel' }],
        where: {codigo: req.swagger.params.codigo.value}
      }
    ).then((indicador)=> {
      if(indicador && indicador.length>0)
          res.json(indicador[0]);
    });
  },
  getIndicadorPorId: (req,res)=>{
    models.Indicador.findById(req.swagger.params.id.value,
      { include: [ { model: models.Tag, as: 'Tags' },
                   { model: models.Indicador, as: 'IndicadoresRelacionados' },
                   { model: models.CategoriaAnalise , as: 'CategoriasAnalise' },
                    { model: models.Unidade , as: 'UnidadeResponsavel' }] }
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
    //console.log(req.body);
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
    //console.log(req.body);
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
    models.IndicadorCategoriaAnalise.destroy({ where: {
      co_indicador:req.swagger.params.codigo.value,
      co_categoria_analise:req.swagger.params.categoria_analise.value}}).then(()=>{
        res.json({codret: 0, mensagem: "Relação do indicador com a categoria de análise retirada com sucesso"});
    });
  },

  addIndicadorRelacionado: (req,res)=>{
    Promise.all([
      models.Indicador.findById(req.swagger.params.codigo_pai.value),
      models.Indicador.findById(req.swagger.params.codigo.value)
    ]).then((item)=>{
      item[0].addIndicadoresRelacionados(req.swagger.params.codigo.value);
      item[1].addIndicadoresRelacionados(req.swagger.params.codigo_pai.value);
      res.json({codret: 0, mensagem: "Indicador relacionado adicionado com sucesso"});
    });
    /*models.Indicador.findById(req.swagger.params.codigo_pai.value).then( item=>{
      item.addIndicadoresRelacionados(req.swagger.params.codigo.value);
      res.json({codret: 0, mensagem: "Indicador relacionado adicionado com sucesso"});
    });

    models.Indicador.findById(req.swagger.params.codigo.value).then( item=>{
      item.addIndicadoresRelacionados(req.swagger.params.codigo_pai.value);
      res.json({codret: 0, mensagem: "Indicador relacionado adicionado com sucesso"});
    });*/
  },

  deleteIndicadorRelacionado: (req,res)=>{
    models.IndicadorRelacionado.destroy(
      { where: {$or: [
        { co_indicador:req.swagger.params.codigo.value,
        co_indicador_pai:req.swagger.params.codigo_pai.value},
        { co_indicador:req.swagger.params.codigo_pai.value,
          co_indicador_pai:req.swagger.params.codigo.value}]}
        }).then(()=>{
        res.json({codret: 0, mensagem: "Relação apagada com sucesso"});
    });
  }
}
