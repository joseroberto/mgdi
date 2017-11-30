var schedule = require('node-schedule');
var models  = require('../models');
const config_param = require('./config')();
const pg = require('pg');


//*    *    *    *    *    *
//┬    ┬    ┬    ┬    ┬    ┬
//│    │    │    │    │    |
//│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
//│    │    │    │    └───── month (1 - 12)
//│    │    │    └────────── day of month (1 - 31)
//│    │    └─────────────── hour (0 - 23)
//│    └──────────────────── minute (0 - 59)
//└───────────────────────── second (0 - 59, OPTIONAL)

const config = {
  user: process.env.USER_DB || config_param.user, //env var: PGUSER
  database: process.env.DATABASE || config_param.database, //env var: PGDATABASE
  password: process.env.PASSWORD_DB || config_param.password,
  host: process.env.HOSTDB || config_param.hostdb, // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const schema = process.env.SCHEMA || config_param.schema;

const pool = new pg.Pool(config);
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

exports.cron = ()=>{
  console.log('Jobs programados');
  models.Periodicidade.findAll({}).then(function(lista_periodicidades) {
    lista_periodicidades.forEach((item)=>{
      switch (item.codigo) {
        case 360:
          schedule.scheduleJob('42 * 1 * * *', ()=>{
              var sql = `update ${schema}.tb_indicador set ds_ultima_atualizacao=maior_data
              from (select a.co_seq_indicador, max(co_ano) as maior_data from ${schema}.tb_indicador a inner join ${config_param.schema}.${config_param.tabela_indicadores} b
              on a.co_seq_indicador=b.co_seq_indicador
              group by a.co_seq_indicador) as sq
              where ${schema}.tb_indicador.co_seq_indicador = sq.co_seq_indicador
              and co_periodicidade_atualizacao=${item.codigo};`;
              pool.query(sql,null, (err, result)=>{
                  if(err) {
                    console.error('error running query no job ', err);
                    return;
                  }
                  console.log(`Última atualização de ${result.rowCount} indicadores anuais ()`);
               });
             });
            break;
          case 30:
            schedule.scheduleJob('42 * 2 * * *', ()=>{
                var sql = `update ${schema}.tb_indicador set ds_ultima_atualizacao=maior_data
                from (select a.co_seq_indicador, max(co_anomes) as maior_data from ${schema}.tb_indicador a inner join ${config_param.schema}.${config_param.tabela_indicadores} b
                on a.co_seq_indicador=b.co_seq_indicador
                group by a.co_seq_indicador) as sq
                where ${schema}.tb_indicador.co_seq_indicador = sq.co_seq_indicador
                and co_periodicidade_atualizacao=${item.codigo};`;
                pool.query(sql,null, (err, result)=>{
                    if(err) {
                      console.error('error running query no job ', err);
                      return;
                    }
                    console.log(`Última atualização de ${result.rowCount} indicadores mensais`);
                 });
               });
              break;
      }
    });
  });
}
