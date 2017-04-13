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

  swaggerExpress.register(app);
  var port = process.env.PORT || 8000;
  app.listen(port);

});
