const async = require('async');
const pg = require('pg');
const util = require('util');
const indicador = require('./indicador');
const NodeCache = require( "node-cache" );
const cache = new NodeCache();


//TODO: Modificar par pegar configuracao da tabela tbBanco
const config = {
  user: 'vasconcelos', //env var: PGUSER
  database: 'dbspo', //env var: PGDATABASE
  password: 'serenaya',
  host: '10.1.2.25', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
const pool = new pg.Pool(config);
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

module.exports = {
  getResultado: (req, res)=>{
      var tipo = '';
      var sql_with = '';
      var campo_agregacao = '';
      var tipoFiltro = '', tipoRegiao = '', codigoRegiao = '';


      //if(req.swagger.params.tipo && req.swagger.params.tipo.value){
      //  tipo = req.swagger.params.tipo.value;
      //}
      // Filtro por uf, ibge, regiao,
      var where = '';

      convertCodigoIndicador(req.swagger.params.codigos.value).then( result=>{
        console.log(result);
        var ans = {
          resultset: result,
          info: { tipoFiltro: tipoFiltro, tipoRegiao: tipoRegiao, codigoRegiao: codigoRegiao}
        };
        //console.log('Resultado', ans);
        res.json(ans);
      });
      /*req.swagger.params.codigos.value.forEach((item)=>{
        if(indicador[item]){
          sql_with = sql_with + ',' + item + ' AS (' + indicador[item].sql + ')';
          sql_from = sql_from + ' left JOIN ' + item + ' ON IBGE.codigogeo=' + item + '.' + campo_agregacao + ' AND IBGE.ano=' + item + '.ano' ;
          meta.push({colType: 'Numeric', titulo: indicador[item].desc, descricao: indicador[item].resumo, tipo: 'valor', colName: item.toLowerCase()});
        }
      });*/

      // Trocas
      //sql_with = sql_with.replace(new RegExp('XXX','g'), campo_agregacao+',');
      //sql_with = sql_with.replace(new RegExp('TTT','g'), where);

      //var sql = sql_with+sql_from + ' ORDER BY 1,2,3,4';

      //console.log(sql);

      /*pool.query(sql,null, (err, result)=>{
        //console.log(result);
        if(err) {
          console.error('error running query', err);
          res.json({mensagem:err});
          return;
        }*/

  }
}

function convertCodigoIndicador(arrValue){
  cache.get( JSON.stringify(arrValue), function( err, value ){
    if( !err ){
      if(value == undefined){
        indicador.getIndicadorPesquisaPorCodigo(arrValue).then(result=>{
          cache.set(value, result, (err, res)=>{
            return new Promise((resolve)=>resolve(result));
          });
        });
      }else{
        return new Promise((resolve)=>resolve(value));
      }
    }
  });
}
