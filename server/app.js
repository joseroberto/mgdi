'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: require('./api/helpers/security')
};



SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());

<<<<<<< HEAD
  /*
  var options = { Bearer:
    function (req, authOrSecDef, scopesOrApiKey, callback) {
      ...
      callback();
    }
  };
  swaggerExpress.runner.swaggerTools.swaggerSecurity(options);
  */

=======
  swaggerExpress.register(app);
>>>>>>> 439085e86890a19a233ea2babb4e67f6e90c6aca
  var port = process.env.PORT || 8000;
  app.listen(port);

});
