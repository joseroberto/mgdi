var models  = require('../models');

module.exports = {
  getUsers: (req, res)=>{
    models.User.findAll({
    }).then(function(lista) {
      res.json({users: lista});
    });
  }
}
