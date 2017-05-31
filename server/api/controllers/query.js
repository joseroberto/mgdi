const async = require('async');
const pg = require('pg');
const _ = require('underscore');

const indicador = {
  'DHM14A':{ desc: 'Detecção em menores de 15 anos',
           sql: 'SELECT co_ibge AS munic, nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 10 GROUP BY co_ibge,nu_ano_ref;'},
  'DGIID':{ desc: 'Detecção de grau II de deformidade',
       sql: 'SELECT co_ibge AS munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_grau2_deformidade FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 82 GROUP BY co_ibge,nu_ano_ref;'},
  'DPG': { desc:'Detecção na pop. geral',
        sql: 'SELECT co_ibge AS munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_pop_geral FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 16 GROUP BY co_ibge,nu_ano_ref;'}
};

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
  getValores: (req, res)=>{
    console.log(req.swagger.params.codigos.value);
    var task = [];
    req.swagger.params.codigos.value.forEach((item)=>{
      if(indicador[item]){
        task.push(
          (cb)=>{
            pool.query(indicador[item].sql,null, cb);
          });
      }
    });

    async.parallel(task, (err,result)=>{
      if(err) {
        console.error('error running query', err);
        res.json({mensagem:err});
        return;
      }
      var mergedlist = _.map(result[0].rows, function(item){
          return _.extend(item, _.findWhere(result[1].rows, { munic: item.munic, ano: item.ano }));
      });
      res.json(mergedlist);
    });
  }
}
