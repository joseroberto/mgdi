const Memcached = require('memcached')
const config_param = require('./config')();
const MAX_TTL = process.env.TTL_CACHE || 300;
const config = process.env.HOST_CACHE || config_param.host_cache;
const cache = new Memcached(config,
  {maxExpiration: MAX_TTL, maxValue: 100 * 1048576})  // 100Mb e 5 min

console.log('Servidor de cache ==>', config)
function getUrlFromRequest(req) {
  const url = req.protocol + '://' + req.headers.host + req.originalUrl
  return url
}

function set(req, res, value) {
  const url = getUrlFromRequest(req)
  if(config){
    cache.set(url, value, MAX_TTL, (err) => {
      console.log('ERRO CACHE SET ==>', err)
      return value;
    });
    cache.set('h.' + url, res.getHeaders(), MAX_TTL, (err) => {});
  }
  return value;
}

function get(req,res, next) {
  const url = getUrlFromRequest(req)
  if(config){
    var keydata = url
    var keyheader = 'h.'+url
    cache.getMulti([keydata,keyheader], (err, data) => {
      if(err){
        console.log('ERRO CACHE GET ==>', err)
        next(req,res)
      }else{
          if (data[keydata]){
            console.log('Recuperando do cache: ', keydata)
            res.set(data[keyheader])
            res.status(200).send(data[keydata])
          }else{
            console.log('Fazendo consulta na base de dados', url)
            next(req,res)
          }
        }
    })
  }else{
    console.log('Nao esta usando o cache')
    next(req,res)
  }

}

module.exports = { get, set }
