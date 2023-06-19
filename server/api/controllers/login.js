'use strict';

const jwt = require('jsonwebtoken');
const util = require('util');
const log4js = require('log4js');
const config_param = require('../helpers/config')();
const swagger = require('../helpers/swagger')();
const acl_rules = require('../helpers/acl-rules')();
const user = require('./user');
const passport = require("passport");
require('../helpers/passport.js')(passport); // pass passport for configuration

module.exports = {
  authenticate: (req, res) => {
    var log = log4js.getLogger();
    try {
      if (!config_param.bypass) {
        console.log('Fazendo autenticacao ', req.body.username);
        // Habilitando log-in de usuários para teste em desenvolvimento
        let schema = process.env.SCHEMA_LOGIN
        // let devUsers = [
        //   "gesest",
        //   "gesplan",
        //   "admin",
        //   "comum1",
        //   "comum3",
        //   "comum2",
        //   "visualizador",
        //   "supervisor"
        // ]
        // if (process.env.ENVIRONMENT === 'development' && devUsers.includes(req.body.username)) {
        //   schema = 'local'
        // }

        passport.authenticate(schema, async (err, userlogin, info) => {
          //console.log('retornos', schema, info, userlogin, err);
          if (err) {
            return res.status(403).send({ message: err });
          }
          if (info) {
            return res.status(500).send(info);
          }
          userlogin['login'] = req.body.username;
          console.log('Login de usuario==>', req.body.username);
          // Checa se o usuário logado possui cadastro do MGI
          var userPerfil = await user.getPorLoginAplicacao(req.body.username, req.body.aplicacao);
          console.log('+++++++++++++++++++++++++ userPerfil==>', userPerfil);
          if (!userPerfil || userPerfil.length == 0) {
            console.log('Usuario não tem perfil')
            var userdata = await user.getPorLogin(req.body.username)
            console.log('userdata=>', userdata)
            if (userdata) {
              console.log('Usuario sem perfil no aplicativo mas com usuario cadastrado')
              var token = jwt.sign({
                ...userdata.dataValues,
                Perfil: {
                  sigla: 'USR',
                  titulo: 'Usuário',
                  descricao:
                    'Este assume papéis especiais de acompanhamento se estiverem atribuídos a: Meta; Entrega Intermediária; Atividades',
                  Aplicacao: {
                    sigla: req.body.aplicacao
                  }
                }
              }, config_param.secret, { expiresIn: req.body.aplicacao === 'MGP' ? '30m' : '7d' });
              return res.status(201).json({ token: util.format('Bearer %s', token), user: userdata.dataValues });
            }
            console.log('Usuario sem perfil e sem cadastro')
            var token = jwt.sign({
              ...userdata.dataValues,
              Perfil: {
                sigla: 'USR',
                titulo: 'Usuário',
                descricao:
                  'Este assume papéis especiais de acompanhamento se estiverem atribuídos a: Meta; Entrega Intermediária; Atividades',
                Aplicacao: {
                  sigla: req.body.aplicacao
                }
              }
            }, config_param.secret, { expiresIn: req.body.aplicacao === 'MGP' ? '30m' : '7d' });
            return res.status(201).json({ token: util.format('Bearer %s', token), user: userlogin });
          } else if (userPerfil[0].dataValues.SituacaoCodigo == 0) {
            var token = jwt.sign(userPerfil[0].dataValues, config_param.secret, {
              expiresIn: userPerfil[0].Perfil.Aplicacao.timeout
                ? `${userPerfil[0].Perfil.Aplicacao.timeout}m`
                : '7d'
            });
            return res.status(406).json({ message: 'Usuário em análise. Por favor entre em contato com o administrador do sistema ou tente novamente mais tarde.' });
          } else if (userPerfil[0].dataValues.SituacaoCodigo == 2) {
            return res.status(403).send({ message: 'Usuário rejeitado pelo ADMINISTRADOR' });
          } else if (userPerfil[0].dataValues.SituacaoCodigo == 3) {
            return res.status(403).send({ message: 'Usuário inexistente.' });
          }

          //get the ACL rules


          // Loga o Usuario
          var token = jwt.sign(userPerfil[0].dataValues, config_param.secret, {
            expiresIn: userPerfil[0].Perfil.Aplicacao.timeout
              ? `${userPerfil[0].Perfil.Aplicacao.timeout}m`
              : '7d'
          });
          res.json({ token: util.format('Bearer %s', token), user: userPerfil[0].dataValues, acl: acl_rules });
        })(req, res);
      } else {
        var temp = {
          cpf: '11111111',
          nome: 'Usuário Fake',
          email: 'teste@teste.com',
          perfil: ''
        };
        console.log('Usuario fake:', temp); //TODO: Retirar isso
        var token = jwt.sign(temp, config_param.secret, {
          expiresIn: userPerfil[0].Perfil.Aplicacao.timeout
            ? `${userPerfil[0].Perfil.Aplicacao.timeout}m`
            : '7d'
        });
        res.json({ token: util.format('Bearer %s', token), user: temp });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  version: (req, res) => {
    try {
      var env = '';
      if (process.env && process.env.NODE_ENV) {
        env = process.env.NODE_ENV;
      } else {
        env = 'development';
      }
      swagger.info['enviroment'] = env;
      swagger.info['company'] = process.env.COMPANY || config_param.company;
      swagger.info['login'] = process.env.SCHEMA_LOGIN || config_param.schema_login;
      swagger.info['title'] = process.env.TITLE || config_param.title;
      swagger.info['description'] = process.env.DESCRIPTION || config_param.description;
      swagger.info['date'] = new Date();
      res.json(swagger.info);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};
