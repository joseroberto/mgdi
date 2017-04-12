'use strict';

const jwt    = require('jsonwebtoken');
const yaml   = require('js-yaml');
const fs   = require('fs');
const soap = require('soap');
const crypto = require('crypto');

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
                console.log('Err:', err);
                console.log(result.respostaBuscaPerfilUsuario.usuario);
                console.log(result.respostaBuscaPerfilUsuario.perfis.perfil[0].perfil.sigla,
                  result.respostaBuscaPerfilUsuario.perfis.perfil[0].esferas.esferasPerfil[0].configuracao);
              });
        });

      console.log();
    } catch (e) {
      console.log(e);
    }

    var token = jwt.sign(user, '12345678');
    res.json({token:token});
  }
};
