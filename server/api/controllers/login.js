'use strict';

const jwt    = require('jsonwebtoken');
const soap = require('soap');
const crypto = require('crypto');
const util = require('util');
var log4js = require("log4js");
const config_param = require('../helpers/config')();
const swagger = require('../helpers/swagger')();
const  models  = require('../models');

module.exports = {
  authenticate: (req, res)=>{
    var log = log4js.getLogger();
    var user = req.body.email;
    log.info('Usuario %s tentando autenticar', user);
    var password = crypto.createHash('sha256').update(req.body.password, 'utf8').digest().toString('hex');

    try {
      if(!config_param.bypass){
        console.log('Acessando:', process.env.WSDL || config_param.wsdl);
        soap.createClient(process.env.WSDL || config_param.wsdl, function(err, client) {
          if(!err){
            client.buscaPerfilUsuario(
              {autenticacao: {email: user, senha: password, siglaSistema: config_param.system}},
              function(err, result) {
                if(err)
                  console.log("---------------------------------\n", err);
                if(err || !result.respostaBuscaPerfilUsuario || !result.respostaBuscaPerfilUsuario.perfis || !result.respostaBuscaPerfilUsuario.perfis.perfil){
                  if(String(err).indexOf('Error')!== -1){
                    res.status(403).send({codret:1000, message:'Login/Senha inválida'});
                  }else{
                    res.status(403).send({codret:1000, message:'Usuário não possui perfil para login no sistema SAGE'});
                  }
                }else if(!err && result.respostaBuscaPerfilUsuario.perfis.perfil){
                  var perfis = {}
                  var array_perfis = [];
                  result.respostaBuscaPerfilUsuario.perfis.perfil.forEach((item)=>{
                    var esferas = [];
                    item.esferas.esferasPerfil.forEach((esfera)=>{
                        esferas.push(esfera.configuracao);
                    });
                    perfis[item.perfil.sigla]=esferas;
                    array_perfis.push(item.perfil.sigla);
                  });
                  var temp = {
                      cpf: result.respostaBuscaPerfilUsuario.usuario.cpf,
                      nome: result.respostaBuscaPerfilUsuario.usuario.nome,
                      email: result.respostaBuscaPerfilUsuario.usuario.email,
                      perfis: perfis
                  };

                  // Salva dados usuario
                  models.User.findOne({email:result.respostaBuscaPerfilUsuario.usuario.email}).then((resp)=>{
                      temp['perfis'] = array_perfis;
                      if(resp){
                        resp.update(temp).then((result)=>{
                          //console.log("Dados de usuário atualizado:", result);
                        });
                        //models.User.update(temp, { where: { cpf: result.respostaBuscaPerfilUsuario.usuario.cpf }}).then((user)=> {

                        //});
                      }else{
                        models.User.create(temp).then((user)=> {
                          console.log("Dados de usuário criado:", user);
                        });
                      }

                      temp['ultimo_login']=resp['dt_atualizacao'];
                      var token = jwt.sign(temp, config_param.secret, { expiresIn: '7d' });
                      res.json({token: util.format('Bearer %s', token), user: temp});

                  }).catch(err=>{
                      console.log('Erro na atualização de dados de usuário', err);
                  });


                }else{
                  console.log('Erro', err);
                  res.status(403).send(err);
                }
              });
          }else{
            console.log(err);
            res.status(500).send(err);
          }
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
