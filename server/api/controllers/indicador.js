var models  = require('../models');

module.exports = {
  getIndicadores: (req, res)=>{
    models.Indicador.findAll({
    }).then(function(lista) {
      res.json({indicadores: lista});
    });
  },
  createIndicador: (req,res)=>{
    console.log(req);
    //models.Indicador.create()
  },
  getIndicador: (req,res)=>{
    res.json(models.Indicador.findById(req.params.id));
  },
  deleteIndicador: (req,res)=>{
    models.Indicador.findById(req.params.id).destroy();
  },
  editaIndicador: (req,res)=>{
    models.Indicador.update({ codigo: req.params.id}, req.body).then(() => {
      res.json({msg:'Ok'});
    })
  }
}
