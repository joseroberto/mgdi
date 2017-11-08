'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();
var morgan = require('morgan');
var log4js = require("log4js");
var config_param = require('./api/helpers/config')();
var job = require('./api/helpers/job');
var passport = require("passport");


module.exports = app; // for testing

var theAppLog = log4js.getLogger();
require('./api/helpers/passport.js')(passport, theAppLog); // pass passport for configuration
// Programa os jobs de execucao
job.cron();

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

app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions
//app.use('/pathYouWantProtect', passport.authenticate('jwt-strategy'),function(req,res,next){
//
//});

app.post('/login2', (req, res, next) =>{
  console.log('dentro do login2');
  passport.authenticate('local-login', (err, user, info)=>{
    console.log('dentro', err, user, info);
    res.status(500).json({mensagem: 'passei aqui'});
    //next();
  })(req,res,next);
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  swaggerExpress.runner.swagger.host = process.env.HOST || config_param.host;
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
  app.use(express.static('public'));
  app.use(express.static('node_modules/redoc/dist'));
  app.use(express.static('api/swagger'));

  //app.use('/', express.static(__dirname + '/doc', options));

  swaggerExpress.register(app);
  app.listen(port);

});
