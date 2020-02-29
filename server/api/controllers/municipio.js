var models  = require('../models');

module.exports = {
  getMunicipio: (req, res)=>{
    let query = {
      include: [ {model: models.Uf, as: 'UF'}],
      order: ['nome']
    }
    if(req.swagger.params.uf.value){
      query={
        include: [ {model: models.Uf, as: 'UF', where:{sigla: req.swagger.params.uf.value.toUpperCase()}}],
        order: ['nome']
      }
    }
    if(req.swagger.params.iduf.value){
      query={
        include: [ {model: models.Uf, as: 'UF', where:{codigo: req.swagger.params.iduf.value}}],
        order: ['nome']
      }
    }
    models.Municipio.findAll(query).then(function(lista) {
      res.json(lista);
    });
  }
}
