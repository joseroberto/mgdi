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
        passport.authenticate(process.env.SCHEMA_LOGIN || config_param.schema_login, async (err, userlogin,info)=>{
            //console.log('retornos', info, userlogin);
            if(err){
              console.log('Erro:',err);
              return res.status(403).send({message: err});
            }
            if(info){
              return res.status(500).send(info);
            }

            console.log('Login de usuario==>', req.body.username);
            // Checa se o usuário logado possui cadastro do MGI
            var userPerfil =  await user.getPorLogin(req.body.username);
            //if(!userPerfil || userPerfil.length==0){
            //  return res.status(406).send(userlogin);
            //}
            var numPerfil = await user.countPerfil();
            console.log('Result user', userPerfil, numPerfil);

            // Loga o Usuario
            var token = jwt.sign(userlogin, config_param.secret, { expiresIn: '7d' });
            res.json({token: util.format('Bearer %s', token), user: userlogin});
        })(req,res);
      }else{
        var temp = {
            cpf: '11111111',
            nome: 'Usuário Fake',
            email: 'teste@teste.com',
            perfil: ''
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
