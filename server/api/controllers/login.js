'use strict';

const jwt    = require('jsonwebtoken');
const soap = require('soap');
const crypto = require('crypto');
const util = require('util');
var log4js = require("log4js");
const config_param = require('../helpers/config')();
const swagger = require('../helpers/swagger')();

module.exports = {
  authenticate: (req, res)=>{
    var log = log4js.getLogger();
    var user = req.body.email;
    log.info('Usuario %s tentando autenticar', user);
    var password = crypto.createHash('sha256').update(req.body.password, 'utf8').digest().toString('hex');

    try {
      if(!config_param.bypass){
        soap.createClient(config_param.wsdl, function(err, client) {
            client.buscaPerfilUsuario(
              {autenticacao: {email: user, senha: password, siglaSistema: config_param.system}},
              function(err, result) {
                console.log("---------------------------------err", err);
                //console.log("result", result);
                if(err || !result.respostaBuscaPerfilUsuario || !result.respostaBuscaPerfilUsuario.perfis || !result.respostaBuscaPerfilUsuario.perfis.perfil){
                  console.log('Tratamento');
                  if(String(err).indexOf('Error')!== -1){
                    res.status(403).send({codret:1000, message:'Login/Senha inválida'});
                  }else{
                    res.status(403).send({codret:1000, message:'Usuário não possui perfil para login no sistema SAGE'});
                  }
                }else if(!err && result.respostaBuscaPerfilUsuario.perfis.perfil){
                  var perfis = {}
                  result.respostaBuscaPerfilUsuario.perfis.perfil.forEach((item)=>{
                    var esferas = [];
                    item.esferas.esferasPerfil.forEach((esfera)=>{
                        esferas.push(esfera.configuracao);
                    });
                    perfis[item.perfil.sigla]=esferas;
                  });
                  var temp = {
                      cpf: result.respostaBuscaPerfilUsuario.usuario.cpf,
                      nome: result.respostaBuscaPerfilUsuario.usuario.nome,
                      email: result.respostaBuscaPerfilUsuario.usuario.email,
                      perfis: perfis
                  };
                  var token = jwt.sign(temp, config_param.secret, { expiresIn: '7d' });
                  res.json({token: util.format('Bearer %s', token), user: temp});
                }else{
                  console.log('Erro', err);
                  res.status(403).send(err);
                }
              });
        });
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
        env = 'Sem informações';
      }
      swagger.info['enviroment']=env;
      res.json(swagger.info);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};
