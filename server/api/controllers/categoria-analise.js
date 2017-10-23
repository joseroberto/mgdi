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
    var entidade = req.body;
    unidade.getCodigoUnidadePai(entidade['unidade_responsavel']).then(function(lista) {
      //console.log('Lista', lista);
      // Atualiza a secretaria nu_nivel=1
      if(lista.nu_nivel==1){
        entidade['secretaria'] = lista.codigo;
      }else{
        entidade['secretaria'] = lista.ancestors.find(item=> item.nu_nivel==1)['codigo'];
      }
      console.log('create', entidade);
      models.Indicador.create(entidade).then((indicador)=> {
        if(req.body.tags)
          indicador.setTags(req.body.tags);
        res.json({codret: 0, mensagem: "Indicador cadastrado com sucesso"});
      }).catch(err=>{
        console.log('Erro', err);
      });
    });
  },
  editaCategoriaAnalise: (req,res)=>{
    //console.log(req.body);
    models.Indicador.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
      models.Indicador.findAll({where: {codigo: req.swagger.params.codigo.value}}).then( item=>{
        item[0].setTags(req.body.tags);
        res.json({codret: 0, mensagem: "Indicador atualizado com sucesso"});
      });
    });
  },
  apagaCategoriaAnalise: (req,res)=>{
    models.Indicador.findAll({where: {codigo: req.swagger.params.codigo.value}}).then((indicador)=>{

      models.IndicadorCategoriaAnalise.destroy({ where: {
        co_seq_indicador:indicador[0].id}}).then(()=>{

          models.IndicadorRelacionado.destroy(
            { where: {$or: [
              { co_seq_indicador:indicador[0].id},
              { co_seq_indicador_pai:indicador[0].id}]}
              }).then(()=>{
                console.log(indicador[0]);
                indicador[0].setTags(null);
                indicador[0].destroy();
                res.json({codret: 0, mensagem: "Indicador apagado com sucesso"});
          });

      });
    });
  }
}
