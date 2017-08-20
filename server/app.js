'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();
var morgan = require('morgan');
var log4js = require("log4js");
var config_param = require('./api/helpers/config')();

module.exports = app; // for testing

var theAppLog = log4js.getLogger();

app.use(morgan("combined",{
  "stream": {
    write: function(str) { theAppLog.debug(str); }
  }
}));

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
  swaggerExpress.runner.swagger.host = config_param.host;
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());


  var port = process.env.PORT || 8000;
  var options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
      res.header('Cache-Control', 'public, max-age=1d');
    }
  };
  theAppLog.info('Servidor REST %s', config_param.host);
  theAppLog.info('Porta %s', port);
  theAppLog.info('Ambiente %s', process.env.NODE_ENV );

  app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
        response.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
  app.use('/', (request, response, next) => {
    console.log('Passei por aqui');
    next();
  });
  app.use(express.static('public'));
  app.use(express.static('node_modules/redoc/dist'));
  app.use(express.static('api/swagger'));
  //app.use('/', express.static(__dirname + '/doc', options));

  swaggerExpress.register(app);
  app.listen(port);

});
