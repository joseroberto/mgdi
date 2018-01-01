'use strict';

const jwt    = require('jsonwebtoken');
const util = require('util');
const log4js = require('log4js');
const config_param = require('../helpers/config')();
const swagger = require('../helpers/swagger')();
const user = require('./user');
const passport = require("passport");
require('../helpers/passport.js')(passport); // pass passport for configuration

module.exports = {

  authenticate: (req, res)=>{
    var log = log4js.getLogger();
    try {
      if(!config_param.bypass){
        passport.authenticate(process.env.SCHEMA_LOGIN || config_param.schema_login, function (err, user,info){
            if(err){
              console.log('Erro:',err);
              return res.status(403).send({message: err});
            }
            if(info){
              return res.status(500).send(info);
            }
            var token = jwt.sign(user, config_param.secret, { expiresIn: '7d' });
            // Checa se o usuário já existe no cadastro do MGI
            /*user.getPorLogin(user.login).then(indicador=>{
              console.log('userMGI', indicador);
            });*/


            res.json({token: util.format('Bearer %s', token), user: user});
        })(req,res);
      }else{
        var temp = {
            cpf: '11111111',
            nome: 'Usuário Fake',
            email: 'teste@teste.com',
            perfis: []
        };
        console.log('Usuario fake:', temp); //TODO: Retirar isso
        var token = jwt.sign(temp, config_param.secret, { expiresIn: '7d' });
        res.json({token: util.format('Bearer %s', token), user: temp});
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  version: (req,res)=>{
    try {
      var env = '';
      if(process.env && process.env.NODE_ENV){
        env = process.env.NODE_ENV;
      }else{
        env = 'development';
      }
      swagger.info['enviroment']=env;
      res.json(swagger.info);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};
