'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var morgan = require('morgan')

module.exports = app; // for testing

app.use(morgan('combined'));

/*app.use((req, response, next) =>{
    console.log('Content-Type',req.get('Content-Type'));
    if(req.method==='POST'){
      console.log('Log de desenv-->', req.headers, req.body);
    }
  next();
});*/

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: require('./api/helpers/security')
};

process.on('SIGINT', function() {
     process.exit(0);
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());


  var port = process.env.PORT || 8000;
  app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
        response.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
  swaggerExpress.register(app);
  app.listen(port);

});
