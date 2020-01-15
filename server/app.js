'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var log4js = require("log4js");
var config_param = require('./api/helpers/config')();
var swagger_config = require('./api/helpers/swagger-yaml')();
var job = require('./api/helpers/job');
var passport = require("passport");
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
const acl = require('express-acl');




var app = express();
var theAppLog = log4js.getLogger();

var router = express.Router();

// Programa os jobs de execucao
//job.cron();  //TODO: Checar a necessidade de programar jobs no servico web

app.use(cors());

//inject log middleware
var log = require('./api/helpers/log')(app);


var config = {
  appRoot: __dirname, // required config
  configDir: "config",
  // swagger:swagger_config,
  swaggerSecurityHandlers: require('./api/helpers/security')
};

process.on('SIGINT', function () {
  process.exit(0);
});

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get('/swagger.yaml', (req, res, next) => {
  //console.log('swagger', swagger_config);
  res.setHeader('content-type', 'application/json');

  swagger_config.host = process.env.HOST || config_param.host;
  swagger_config.info.title = config_param.title;
  swagger_config.info.description = config_param.description;
  res.send(swagger_config);
});

acl.config({
  yml: true,
  baseUrl: 'api',
  filename: 'acl.yaml',
  path: 'config',
  decodedObjectName: 'user',
  roleSearchPath: 'user.Perfil.sigla'
});

SwaggerExpress.create(config, function (err, se) {
  if (err) {
    throw err;
  }

  se.runner.swagger.host = process.env.HOST || config_param.host;
  se.runner.swagger.info.title = config_param.title;
  se.runner.swagger.info.description = config_param.description;
  se.runner.swagger.schemes = [  process.env.PROTOCOLO || config_param.protocolo || 'http' ];

  app.use(se.runner.swaggerTools.swaggerUi());




  var port = process.env.PORT || config_param.port || 8000;
  var host = process.env.HOST || config_param.host || 8000;
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
  theAppLog.info('Servidor REST %s', host);
  theAppLog.info('Porta %s', port);
  theAppLog.info('Ambiente %s', process.env.NODE_ENV);

  app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
    response.header('Access-Control-Allow-Credentials', 'true');
    next();
  });


  app.use(express.static('public'));
  app.use(express.static('node_modules/redoc/dist'));


// Implementacao de cache de consulta

  se.register(app);

// path specified
// looks for ac.json in the config folder


app.listen(port);


});


module.exports = app; // for testing
