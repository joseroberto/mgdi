const async = require('async');
const pg = require('pg');
const util = require('util');
const _ = require('underscore');

const indicador = {

  // Criterio de Analise
  'IBGEMUN': { desc: 'IBGE Municipio',
        sql:'SELECT tb_ibge.regiao, tb_ibge.ibge as co_ibge, tb_ibge.cidade, tabpop.ano_pop as ano, sum(tabpop.pop_me_15) as pop_me_15, sum(tabpop.pop) as pop_ FROM dbgeral.tb_pop_faixas AS tabpop INNER JOIN dbgeral.tb_ibge AS tb_ibge ON tabpop.co_ibge = tb_ibge.ibge WHERE  tabpop.pop_me_15 > 0 AND tabpop.pop > 0 AND tabpop.ano_pop > 2000 TTT group by tabpop.ano_pop,tb_ibge.cidade,tb_ibge.ibge,tb_ibge.regiao'},
  'IBGEEST': { desc: 'IBGE Estadual',
              sql:'SELECT tb_ibge.regiao, tb_ibge.co_uf, tb_ibge.uf, tabpop.ano_pop as ano, sum(tabpop.pop_me_15) as pop_me_15, sum(tabpop.pop) as pop_ FROM dbgeral.tb_pop_faixas AS tabpop INNER JOIN dbgeral.tb_ibge AS tb_ibge ON tabpop.co_ibge = tb_ibge.ibge WHERE tabpop.pop_me_15 > 0 AND tabpop.pop > 0 AND tabpop.ano_pop > 2000 TTT group by tb_ibge.regiao, tb_ibge.co_uf, tb_ibge.uf, tabpop.ano_pop'},
  // TODO: Não tem por requigão?  E nacional?

  // Indicadores
  'DHM14A':{ desc: 'Detecção em menores de 15 anos',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 10 GROUP BY XXX nu_ano_ref'},
  'DGIID':{ desc: 'Detecção de grau II de deformidade',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_grau2_deformidade FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 82 GROUP BY XXX nu_ano_ref'},
  'DPG': { desc:'Detecção na pop. geral',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_pop_geral FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 16 GROUP BY XXX nu_ano_ref'},
  'CCAC': { desc:'Casos curados nos anos das coortes',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS curados_anos_coortes FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 310 GROUP BY XXX nu_ano_ref'},
  'CNDAC': { desc:'Casos novos diagnosticados nos anos das coortes',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS novos_diag_anos_coortes FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 320 GROUP BY XXX nu_ano_ref'},
  'CIR': { desc:'Contatos intradomiciliares registrados',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_registrados FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 90 GROUP BY XXX nu_ano_ref'},
  'CIE': { desc:'Contatos intradomiciliares examinados',
        sql: 'SELECT XXX nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_examinados FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 80 GROUP BY XXX nu_ano_ref'},

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
    // Tipo nacional -> BR, UF, MUN TODO: Depois colocar por regiao e BR
    var tipo = '';
    if(req.swagger.params.tipo && req.swagger.params.tipo.value){
      tipo = req.swagger.params.tipo.value;
    }
    // Filtro por UF ou MUN
    var where = '';
    if(req.swagger.params.tipo && req.swagger.params.uf.value){
      where = where + ' AND tb_ibge.co_uf = '+ req.swagger.params.uf.value;
    }
    if(req.swagger.params.ibge && req.swagger.params.ibge.value){
      where = where + ' AND tb_ibge.ibge=' + req.swagger.params.ibge.value;
    }

    var sql_from = ' SELECT * FROM IBGE ';
    var sql_with = '';
    var campo = ''; // TODO: Colocar na configuracao do indicador
    switch(tipo){
      case 'UF':
        sql_with = 'WITH IBGE AS (' + indicador['IBGEEST'].sql + ')';
        campo = 'co_uf';
        break;
      case 'MUN':
        sql_with = 'WITH IBGE AS (' + indicador['IBGEMUN'].sql + ')';
        campo = 'co_ibge';
        break;
      default:
        sql_with = 'WITH IBGE AS (' + indicador['IBGEEST'].sql + ')';
        campo = 'co_uf';
        break;
    }

    req.swagger.params.codigos.value.forEach((item)=>{
      if(indicador[item]){
        sql_with = sql_with + ',' + item + ' AS (' + indicador[item].sql + ')';
        sql_from = sql_from + ' left JOIN ' + item + ' ON IBGE.' + campo + '=' + item + '.' + campo + ' AND IBGE.ano=' + item + '.ano' ;
      }
    });

    sql_with = sql_with.replace(new RegExp('XXX','g'), campo+',');
    sql_with = sql_with.replace(new RegExp('TTT','g'), where);

    var sql = sql_with+sql_from + ' ORDER BY 1,2,3,4';

    console.log(sql);

    pool.query(sql,null, (err, result)=>{
      if(err) {
        console.error('error running query', err);
        res.json({mensagem:err});
        return;
      }
      res.json(result.rows);
    });
  }
}
