const async = require('async');
const pg = require('pg');
const util = require('util');
const indicador = require('./indicador');
const NodeCache = require( "node-cache" );
const cache = new NodeCache();
const config_param = require('../helpers/config')();

//TODO: Modificar par pegar configuracao da tabela tbBanco
/*
const config = {
  user: 'vasconcelos', //env var: PGUSER
  database: 'dbspo', //env var: PGDATABASE
  password: 'serenaya',
  host: '10.1.2.25', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
*/

const config = {
  user: 'vasconcelos', //env var: PGUSER
  database: 'dbspo', //env var: PGDATABASE
  password: 'serenaya',
  host: 'localhost', // Server hosting the postgres database
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
      // Aplica filtros
      var config = montaParametros(req.swagger.params);

      // Filtro por uf, ibge, regiao,
      // TODO: Checar como estará vindo...
      convertCodigoIndicador(config.codigos).then(result=>{
        var sql = montaQuery(result, config);
        console.log(sql);
        res.json({}); //TODO: Temporariamente
        /*
        pool.query(sql,null, (err, result)=>{
          //console.log(result);
          if(err) {
            console.error('error running query', err);
            res.json({mensagem:err});
            return;
          }
          if(req.headers.accept === 'application/cda'){
            res.json(formataCDAResult(result, tipoFiltro, tipoRegiao, codigoRegiao));
          }else if (req.headers.accept === 'application/json') {
            res.json(formataJSONResult(result, tipoFiltro, tipoRegiao, codigoRegiao));
          }else{
            res.status(500).send({codret: -1, mensagem: "Formato inválido"});
          }

        });
        */
      }, err=>{ console.log('Erro==>', err); res.status(500).send({message: err});});
  }
}

function formataCDAResult(result, tipoFiltro, tipoRegiao, codigoRegiao){
  return {
    resultset: result.rows,
  };
}

function formataJSONResult(result, tipoFiltro, tipoRegiao, codigoRegiao){
  var resultado = tabulaResultado(result.rows);
  return {
    rows: resultado.length,
    resultset: resultado,
    titulos: result.titulos,
    info: { tipoFiltro: tipoFiltro, tipoRegiao: tipoRegiao, codigoRegiao: codigoRegiao}
  };
}

/*
  Monta os uma saida de configuracao com o que e necessario
  para a consulta dinamica
*/
function montaParametros(paramEntrada){
  var ans = {};
  if(paramEntrada.tipo && paramEntrada.tipo.value){
    ans['tipo'] = paramEntrada.tipo.value;
  } else{
    ans['tipo'] = 'MUN';  // Default para tipo de pesquisa
  }
  if(paramEntrada.codigos){
    ans['codigos'] = paramEntrada.codigos.value;
  }
  return ans;
}

function convertCodigoIndicador(arrValue){
  return new Promise((resolve, reject) => {
    var ans = {};
    var arrBusca = [];
    var granularidade = 0;
    var periodicidade = 0;

    if(!arrValue){
      reject('Parametro de consulta vazio');
    }
    arrValue.forEach((itemArr)=>{
        // Recupera do cache aqueles que são possíveis
        var value = cache.get(itemArr.trim());
        if(value != undefined) {
          console.log('Recuperando do cache:', itemArr, value, value.granularidade);
          ans[itemArr.trim()] = value;
          // Testa granularidade.  Se difere deve dar um erro
          if(granularidade==0){
            granularidade = value.granularidade;
          }
          if(value.granularidade!=granularidade){
            reject('Conjunto de indicadores com granularidade diferentes');
          }
          // Testa periodicidade.  Se difere deve dar um erro
          if(periodicidade==0){
            periodicidade = value.periodicidade;
          }
          if(value.periodicidade!=periodicidade){
            reject('Conjunto de indicadores com periodicidades diferentes');
          }
        }else{
          console.log('Repassando para busca', itemArr);
          arrBusca.push(itemArr.trim());
        }
    });
    if(arrBusca) {
      // Pesquisa no banco o que nao tiver no cache
      indicador.getIndicadorPesquisaPorCodigo(arrBusca).then(result=>{
        result.forEach(item=>{
          ans[item.codigo] = {
            id: item.id,
            titulo: item.titulo,
            granularidade: item.granularidade,
            banco: item.banco_dados,  //TODO: trocar pela entidade completa
            tipoConsulta: item.tipo_consulta,
            sql: item.referencia_consulta,
            criterioAgregacao: item.criterio_agregacao,
            periodicidade: item.periodicidade_atualizacao
          };
          // Testa tipos de consulta
          if(item.tipo_consulta!=2 && item.tipo_consulta!=3){ // Tratar depois a formula
            reject('Tipo de consulta incompatível ou indicador sem informação');
          }
          // Testa tipos de periodicidade
          if(item.periodicidade_atualizacao!=30 && item.periodicidade_atualizacao!=360){ // Tratar depois a periodicidade
            reject('Consulta o tipo de periodicidade do indicador ainda não foi desenvolvida');
          }

          cache.set(item.codigo, ans[item.codigo]);
          // Testa granularidade.  Se difere deve dar um erro
          if(granularidade==0){
            granularidade = item.granularidade;
          }
          if(item.granularidade!=granularidade){
            reject('Conjunto de indicadores com granularidade diferentes');
          }
          // Testa periodicidade.  Se difere deve dar um erro
          if(periodicidade==0){
            periodicidade = item.periodicidade;
          }
          if(item.periodicidade!=periodicidade){
            reject('Conjunto de indicadores com periodicidades diferentes');
          }
        });
        resolve(ans);
      }).catch(err=>reject(err));
    }else {
        resolve(ans);
    }
  });
}

function montaQueryGranularidadeEstadual(ids, tipo){
  var isTipoRegiao = (tipo == 'REG');
  var isTipoUF = (tipo=='UF');
  var isTipoBrasil = (tipo=='BR');

  //TODO: Tornar dinamico o schema da tabela
  var select='select a.co_seq as id';
  var groupby = 'group by a.co_seq';
  var from = 'from dbesusgestor.tb_resultado a';
  var where = `where a.co_seq_indicador in ${ids}`;

  //TODO: TOrnar dinamico a temporalidade
  select += ',a.co_ano as ano';
  groupby += ',a.co_ano';

  //TODO: Tornar dinamico a granularidade
  select += `,c.no_uf as uf,d.ds_regiao as regiao`;
  groupby += `,c.no_uf,d.ds_regiao`;
  from += ` right outer join dbesusgestor.tb_uf c on c.co_uf=a.co_uf
                inner join dbesusgestor.tb_regiao d on d.co_regiao=c.co_regiao`;

  //TODO: Tornar dinamico a agregação
  select += ',sum(nu_valor) as valor';

  return `${select} ${from} ${where} ${groupby};`;
}

function montaQuery(indicadores, config){
  console.log('montaQuery', indicadores);
  (Object.keys(indicadores)).forEach(key=>{
      var sql_width='';
      // monta query conforme o tipo de consulta
      switch (indicadores[key].tipoConsulta) {
        case 2: // Query
          sql_width = `WITH ${key} AS ( ${indicadores[key].sql} ) `;
          break;
        case 3: // Importação
            sql_width += `WITH ${key} AS ( ${ montaQueryValorIndicador(indicadores[key])} ) `;
            break;
        default:

      }
  });

  var isTipoMunicipio = (config.tipo=='MUN');
  var isTipoRegiao = (config.tipo == 'REG');
  var isTipoUF = (config.tipo=='UF');
  var isTipoBrasil = (config.tipo=='BR');

  //TODO: Tornar dinamico a agregação
  var select='select sum(nu_valor) as valor';
  var groupby = 'group by a.co_seq';
  //TODO: Tornar dinamico o schema da tabela
  var from = 'from dbesusgestor.tb_resultado a';
  var where = `where a.co_seq_indicador in ${ids}`;
  var orderby = '';



  //TODO: Tornar dinamico a granularidade
  select += `,c.no_uf as uf,d.ds_regiao as regiao ${(isTipoMunicipio?',b.no_municipio as municipio':'')} ${(isTipoMunicipio?',b.co_ibge as ibge':'')}`;
  groupby += `,c.no_uf,d.ds_regiao ${(isTipoMunicipio?',b.no_municipio':'')}${(isTipoMunicipio?',b.co_ibge':'')}`;
  from += ` right outer join dbesusgestor.tb_municipio b on b.co_ibge=a.co_ibge
                inner join dbesusgestor.tb_uf c on c.co_uf=b.co_uf
                inner join dbesusgestor.tb_regiao d on d.co_regiao=c.co_regiao`;
  orderby += `c.no_uf, d.ds_regiao${(isTipoMunicipio?',b.no_municipio':'')}`;

  //TODO: TOrnar dinamico a temporalidade
  select += ',a.co_ano as ano';
  groupby += ',a.co_ano';
  orderby += ',a.co_ano';

  return `${select} ${from} ${where} ${groupby} order by ${orderby};`;
}

function montaQueryValorIndicador(indicador){
  var sql_select = 'select ';
  var sql_group = 'group by ';

  console.log('montaQueryValorIndicador', indicador);

  switch (indicador.criterioAgregacao) {
    case 0: // Sem agregacao
      sql_select += 'nu_valor as valor';
      break;
    case 1: // Maior valor
      sql_select += 'MAX(nu_valor) as valor';
      break;
    case 2: // Menor valor
      sql_select += 'MIN(nu_valor) as valor';
      break;
    case 3: // Media
      sql_select += 'AVG(nu_valor) as valor';
      break;
    case 4: // Soma
      sql_select += 'SUM(nu_valor) as valor';
      break;
  }

  switch (indicador.granularidade) {
    case 3:  // Municipio
      sql_select += ', co_ibge as ibge';
      sql_group += (indicador.criterioAgregacao!=0 ? ', co_ibge':'');
      break;
    case 4:  // CNES
      sql_select += ', co_cnes';
      sql_group += (indicador.criterioAgregacao!=0? ', co_cnes':'');
      break;
  }

  switch (indicador.periodicidade) {
    case 360:
      sql_select += ', co_ano as ano';
      sql_group += (indicador.criterioAgregacao!=0? ', co_ano':'');
      break;
    case 30:
      sql_select += ', co_anomes as anomes';
      sql_group += (indicador.criterioAgregacao!=0? ', co_anomes':'');
      break;
    case 1:
      sql_select += ', co_anomesdia as anomesdia';
      sql_group += (indicador.criterioAgregacao!=0? ', co_anomesdia':'');
      break;
    default:
  }

  if(indicador.criterioAgregacao==0){
    sql_group='';
  }

  return `${sql_select} from ${config_param.schema_esusgestor}.${config_param.tabela_indicadores} where co_seq_indicador=${indicador.id} ${sql_group}`;

}
/*
  Funcao para tabular resulado

  Objetivo: Tratar a saída do JSON onde o objeto está com o item detalhado
            em linhas e alinhar a temporalidade como um conjunto interno

  Premissa: Dados organizados em Ano e por municipio
*/
function tabulaResultado(result){
  //TODO: Tornar dinamica a temporalidade
  var ano;
  var retorno=[];
  var itemTratado = {municipio:null};

  //TODO: Obedecer o tipo de consulta
  result.forEach(item =>{
    if(itemTratado.municipio==item.municipio){
      itemTratado[item.ano] = +item.valor;
    }else{
      if(itemTratado.municipio){
        retorno.push(itemTratado);
        itemTratado = {municipio:item.municipio};
      }

      // Primeiro acesso
      Object.keys(item).forEach(key=>{
        if(key!='ano' && key!='valor'){
          itemTratado[key] = item[key];
        }
      });
    }
  });

  if(itemTratado.ano){
    retorno.push(itemTratado);
  }

  return retorno;
}
