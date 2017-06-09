var models  = require('../models');
//const csv_converter = require('csvtojson').Converter,
const csv = require('csvtojson'),
        fs = require('fs');


module.exports = {
  getUnidades: (req, res)=>{
    models.Unidade.findAll({}).then(function(lista) {
      res.json({unidades: lista});
    });
  },
  createUnidade: (req,res)=>{
    console.log('createUnidade', req.body);
    delete req.body['codigo'];
    models.Unidade.create(req.body).then((indicador)=> {
      res.json({codret: 0, mensagem: "Unidade cadastrada com sucesso"});
    }).catch(err=>{
      console.log(err);
      res.status(500).json({message: err.message});
    });
  },
  editaUnidade: (req,res)=>{
    console.log('editaUnidade',req.body);
    models.Unidade.update( req.body, { where: { codigo: req.swagger.params.codigo.value }}).then(() => {
        res.json({codret: 0, mensagem: "Unidade atualizada com sucesso"});
    });
  },
  getUnidade: (req,res)=>{
    models.Unidade.findById(req.swagger.params.codigo.value, { hierarchy: true }).then(function(lista) {
      res.json({unidades: lista});
    });
  },
  deleteUnidade: (req,res)=>{
    models.Unidade.findById(req.swagger.params.codigo.value).then((unidade)=>{
      unidade.destroy();
      res.json({codret: 0, mensagem: "Unidade apagada com sucesso"});
    });
  },
  import_arquivo: (req,res)=>{
    var arquivo = req.swagger.params.arquivo.value;
    // Le arquivo
    if(arquivo.mimetype=='text/csv'){
      csv({noheader:false, delimiter:';', trim:true, headers:['codigo','sigla','nome','informal', 'competencia', 'atividade', 'unidade_pai']})
      .fromString(arquivo.buffer.toString())
      .on('json', (json)=>{
          //console.log('original',json);
          if('sigla' in json){
            var uni = Object.assign(json, {isInformal: (json['informal']=='S')})
            if(json['unidade_pai']){
              uni = Object.assign(uni,{unidadepai:json['unidade_pai'] });
            }
            //console.log(uni);
            models.Unidade.findOrCreate({where:{
                codigo: json['codigo']
              },
              defaults: uni}).then((u, created)=>{
                //console.log(u, created);
              });
            }
      })
      .on('error', (err)=>{
        console.log(err);
        res.status(500).send(err);
      })
      .on('done', ()=>{
          res.json({codret: 0, mensagem: "Arquivo rescebido com sucesso."});
      });
    }

  }
}
