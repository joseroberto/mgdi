'use strict';

const jwt    = require('jsonwebtoken');
const yaml   = require('js-yaml');
const fs   = require('fs');
const soap = require('soap');
const crypto = require('crypto');
const util = require('util');
const filename  = (process.env.NODE_ENV == 'production')? 'config/default.production.yaml':'config/default.yaml';

module.exports = {
  authenticate: (req, res)=>{
    var user = req.body.email;
    var password = crypto.createHash('sha256').update(req.body.password, 'utf8').digest().toString('hex');

    try {
      var doc = yaml.safeLoad(fs.readFileSync('config/default.yaml', 'utf8'));
      if(doc.environment.production){
        soap.createClient(doc.config.wsdl, function(err, client) {
            //console.log('Erro:',err, client );
            client.buscaPerfilUsuario(
              {autenticacao: {email: user, senha: password, siglaSistema: doc.config.system}},
              function(err, result) {
                if(!err && result.respostaBuscaPerfilUsuario.perfis.perfil){
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
                  console.log(temp); //TODO: Retirar isso
                  var token = jwt.sign(temp, doc.config.secret, { expiresIn: '7d' });
                  res.json({token: util.format('Bearer %s', token), user: temp});
                }else{
                  console.log(err);
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
        var token = jwt.sign(temp, doc.config.secret, { expiresIn: '7d' });
        res.json({token: util.format('Bearer %s', token), user: temp});
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  version: (req,res)=>{
    try {
      var doc = yaml.safeLoad(fs.readFileSync('api/swagger/swagger.yaml', 'utf8'));
      var env = '';
      if(process.env && process.env.NODE_ENV){
        env = process.env.NODE_ENV;
      }else{
        env = 'Sem informações';
      }
      doc.info['enviroment']=env;
      res.json(doc.info);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
};
