'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: {
    Bearer: function (req, authOrSecDef, scopesOrApiKey, cb) {
      console.log('Opa. Passei aqui!!!', scopesOrApiKey);
      cb(null);
    }
  }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  /*
  var options = { Bearer:
    function (req, authOrSecDef, scopesOrApiKey, callback) {
      ...
      callback();
    }
  };
  swaggerExpress.runner.swaggerTools.swaggerSecurity(options);
  */

  var port = process.env.PORT || 8000;
  app.listen(port);

});
