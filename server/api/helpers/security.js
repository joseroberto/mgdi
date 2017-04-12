// Modulo de seguranca

const jwt = require('jsonwebtoken');

module.exports = {
  // swagger-tools style handler
  Bearer: function failure(req, authOrSecDef, scopesOrApiKey, next) {
    console.log('Passei por aqui');
    next();
  }
};
