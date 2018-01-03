var models  = require('../models');

module.exports = {
  getUsers: (req, res)=>{
    models.User.findAll({
    }).then(function(lista) {
      res.json({users: lista});
    });
  },
  getPorLogin: (login)=>{
    return models.User.findAll({
      where: {login:login}
    });
  },
  countPerfil: ()=>{
      return models.User.count();
    }
}
