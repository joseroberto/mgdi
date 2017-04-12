'use strict';

const jwt    = require('jsonwebtoken');
const yaml   = require('js-yaml');
const fs   = require('fs');
const soap = require('soap');
const crypto = require('crypto');
const util = require('util');

module.exports = {
  authenticate: (req, res)=>{
    var user = req.body.email;
    var password = crypto.createHash('sha256').update(req.body.password, 'utf8').digest().toString('hex');

    try {
      var doc = yaml.safeLoad(fs.readFileSync('config/default.yaml', 'utf8'));
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
                  res.json({token: util.format('Bearer: %s', token)});
                }else{
                  res.status(403).send(err);
                }
              });
        });
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }


  }
};
