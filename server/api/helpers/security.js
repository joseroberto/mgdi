// Modulo de seguranca
const yaml   = require('js-yaml');
const fs   = require('fs');
const jwt = require('jsonwebtoken');

module.exports = {
  // swagger-tools style handler
  Bearer: function failure(req, authOrSecDef, authorization, cb) {
    var token='';

    if(authorization) {
        var doc = yaml.safeLoad(fs.readFileSync('config/default.yaml', 'utf8'));
        var parts = authorization.split(' ');
        if(parts.length === 2) {
            var scheme = parts[0];
            var credentials = parts[1];
            if(/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
            else {
                cb(new Error('Format is Authorization: Bearer [token]'));
                return;
            }
        }
    }

    if(token) {
      try{
        jwt.verify(token, doc.config.secret, {}, function(err, decoded) {
            if(err) {
                return cb(new Error('Invalid token'));
            }
            //console.log("Token decodificado:", decoded);
            cb();
        });
      } catch (e) {
        console.log(e);
        cb(e);
      }
    }
    else {
        cb(new Error('No authorization token was found'));
    }

  }
};
