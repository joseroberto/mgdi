'use strict';

var jwt    = require('jsonwebtoken');

module.exports = {
  authenticate: (req, res)=>{
    var user = req.swagger.params.body.value.email;
    console.log(user);
    var token = jwt.sign(user, '12345678');
    res.json({token:token});
  }
};
