var morgan = require('morgan');
var path = require('path');
var jwtDecode = require('jwt-decode');
var _ = require('lodash')

module.exports = (app)=>{

// console.log("swagger_config:" + JSON.stringify(swagger_config.paths) )


var logDirectory = path.join(__dirname, '../../../server_log')
var fs = require('fs');
var rfs = require('rotating-file-stream')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)


var accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
})

app.use(morgan(function (tokens, req, res) {
  let cpf = 'anônimo'
  let nome = 'anônimo'
  if (_.has(req.headers, 'authorization')) {
    var teste = req.headers.authorization
    try {
      var decoded = jwtDecode(teste);
      cpf = decoded['cpf']
      nome = `'${decoded["nome"]}'`
    } catch (e) {

    }
  }
  return [
    tokens.method(req, res),
    `'${new Date()}'`,
    cpf,
    nome,
    `'${JSON.stringify(req.body)}'`,
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}, {
  stream: accessLogStream
}))


return app;
}
