var models  = require('../models');

module.exports = {
  getMunicipio: (req, res)=>{
    let query = {
      include: [ {model: models.Uf, as: 'UF'}]
    }
    if(req.swagger.params.uf.value){
      query={
        include: [ {model: models.Uf, as: 'UF', where:{sigla: req.swagger.params.uf.value.toUpperCase()}}]
      }
    }
    models.Municipio.findAll(query).then(function(lista) {
      res.json(lista);
    });
  }
}
