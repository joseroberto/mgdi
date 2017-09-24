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
      console.log('config', config);

      // Filtro por ano, uf, ibge, regiao,
      convertCodigoIndicador(config.codigos).then(indicadores=>{
        var sql = montaQuery(indicadores, config);
        console.log(sql);
        pool.query(sql,null, (err, result)=>{
          //console.log(result);
          if(err) {
            console.error('error running query', err);
            res.json({mensagem:err});
            return;
          }
          // req.headers.accept === 'application/json'
          console.log('FILTRO==>', config.formato);
          switch (config.formato) {
            case 'LIN':
              res.json(result.rows);
              break;
            case 'CDA':
                res.json(formataCDAResult(result, config, indicadores));
                break;
            case 'TAB':
                res.json(formataJSONResult(result, config, Object.keys(indicadores)));
                break;
            default:
                res.status(500).send({codret: -1, mensagem: "Formato inválido"});
          }
        });

      }, err=>{ console.log('Erro==>', err); res.status(500).send({message: err});});
  }
}

/*
  Formatador de saída para consultas CDA.
*/
function formataCDAResult(result, config, indicadores){
  var metadata=[];
  var filtro={};
  var tipoRegiao='';

  indicadores['REGIAO']={titulo:'Região', descricao:'Região agregada', tipo:'geo'};
  indicadores['LOCAL']={titulo:'Cidade', descricao:'Região desagregada', tipo:'geo'};
  indicadores['UF']={titulo:'Estado', descricao:'Unidade Federativa', tipo:'geo'};
  indicadores['CODIGOGEO']={titulo:'Município', descricao:'Código da unidade', tipo:'id'};
  indicadores['ANO']={titulo:'Ano', descricao:'Ano da ocorrência', tipo:'id'};


  // Acrescenta os dados da consulta
  var referencia = indicadores[Object.keys(indicadores)[0]];
  switch (referencia.granularidade) {
    case 3: //Municipio
      tipoRegiao='municipal';
      break;
  }

  var numIndex = 0;

  result.fields.forEach(item=>{
    var key = item.name.toUpperCase();
    console.log('KEY==>', key, 'VALUE==>', indicadores[key]);
    var meta = {
        colType: item.dataTypeID == 23? "Numeric": "String",
        colName: item.name,
        colIndex: numIndex++,
        titulo: indicadores[key].titulo,
        resumo: indicadores[key].descricao,
        tipo: indicadores[key].tipo
    };
    metadata.push(meta);
  });

  return {
    resultset: result.rows,
    info: {tipoFiltro: (config.tipo=='MUN'? 'municipal':''), tipoRegiao: tipoRegiao, codigoRegiao: ''},
    metadata: metadata
  };
}

function formataJSONResult(result, config, indicadores){
  var resultado = tabulaResultado(result.rows, indicadores);
  return {
    rows: resultado.length,
    resultset: resultado,
    titulos: result.titulos,
    info: { tipoFiltro: config.tipo, tipoRegiao: null, codigoRegiao: null}
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
  if(paramEntrada.formato && paramEntrada.formato.value){
    ans['formato'] = paramEntrada.formato.value;
  } else{
    ans['formato'] = 'LIN';  // Default para tipo de pesquisa
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
            descricao: item.descricao,
            granularidade: item.granularidade,
            banco: item.banco_dados,  //TODO: trocar pela entidade completa
            tipoConsulta: item.tipo_consulta,
            sql: item.referencia_consulta,
            criterioAgregacao: item.criterio_agregacao,
            periodicidade: item.periodicidade_atualizacao,
            tipo: 'valor'
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

function montaQuery(indicadores, config){

  var sql_with='WITH ';
  (Object.keys(indicadores)).forEach(key=>{
      // monta query conforme o tipo de consulta
      switch (indicadores[key].tipoConsulta) {
        case 2: // Query
          sql_with += `${key} AS ( ${indicadores[key].sql} ),`;
          break;
        case 3: // Importação
          sql_with += `${key} AS ( ${ montaQueryValorIndicador(key, indicadores[key])} ),`;
          break;
      }
  });
  sql_with = sql_with.substr(0,sql_with.length - 1);

  var sql = montaQueryComplemento(indicadores, config);

  return `${sql_with} ${sql}`

}

function montaQueryComplemento(indicadores, config){
    var isTipoMunicipio = (config.tipo=='MUN');
    var isTipoRegiao = (config.tipo == 'REG');
    var isTipoUF = (config.tipo=='UF');
    var isTipoBrasil = (config.tipo=='BR');

    var select = 'select ';
    var from = 'from ';
    //var where = 'where '; //Essa vai ficar para os filtros
    var groupby = 'group by ';
    var orderby = '';

    var varPeriodicidade = '';
    var indicadorAnterior = '';
    var referencia = indicadores[Object.keys(indicadores)[0]];

    switch (referencia.periodicidade) {
      case 360:
        varPeriodicidade = 'ano';
        break;
      case 30:
        varPeriodicidade = 'anomes';
        break;
      case 1:
        varPeriodicidade = 'anomesdia';
        break;
      default:
    }

    select += `${Object.keys(indicadores)[0]}.${varPeriodicidade},`;

    switch (referencia.granularidade) {
      case 3:  // Municipio
        // Testar o parametro
        select += `uf.no_uf as uf,reg.ds_regiao as regiao, mun.no_municipio as local, mun.co_ibge as codigogeo`;
        from += `${config_param.schema_esusgestor}.tb_municipio mun
                      inner join ${config_param.schema_esusgestor}.tb_uf uf on uf.co_uf=mun.co_uf
                      inner join ${config_param.schema_esusgestor}.tb_regiao reg on reg.co_regiao=uf.co_regiao`;
        groupby += `uf.no_uf,reg.ds_regiao, mun.no_municipio, mun.co_ibge`;
        orderby += `uf.no_uf, reg.ds_regiao, mun.no_municipio`;

        break;
    }
    orderby += `,${Object.keys(indicadores)[0]}.${varPeriodicidade}`;

    (Object.keys(indicadores)).forEach(key=>{
        select += `,${key}`;
        from += ` LEFT OUTER JOIN ${key} `;
        // granularidade
        switch (referencia.granularidade) {
          case 3: //Municipio
            from += `ON ${key}.ibge = mun.co_ibge `;
            break;
        }
        // ano
        if(indicadorAnterior){
          from += `AND ${key}.${varPeriodicidade} = ${indicadorAnterior}.${varPeriodicidade} `
        }
        indicadorAnterior = key;
    });

    if(referencia.criterioAgregacao==0){
      groupby='';
    }

    //console.log(`${select} ${from} ${where} ${groupby} order by ${orderby};`);
    return `${select} ${from} ${groupby} order by ${orderby};`;
}

function montaQueryValorIndicador(codigo, indicador){
  var sql_select = 'select ';
  var sql_group = 'group by ';

  //console.log('montaQueryValorIndicador', indicador);

  switch (indicador.criterioAgregacao) {
    case 0: // Sem agregacao
      sql_select += ` nu_valor::int  as ${codigo}`;
      break;
    case 1: // Maior valor
      sql_select += ` MAX(nu_valor)::int  as${codigo}`;
      break;
    case 2: // Menor valor
      sql_select += ` MIN(nu_valor)::int  ${codigo}`;
      break;
    case 3: // Media
      sql_select += ` AVG(nu_valor)::int  ${codigo}`;
      break;
    case 4: // Soma
      sql_select += ` SUM(nu_valor)::int  ${codigo}`;
      break;
  }

  switch (indicador.granularidade) {
    case 3:  // Municipio
      sql_select += ', co_ibge::int  as ibge';
      sql_group += (indicador.criterioAgregacao!=0 ? ', co_ibge':'');
      break;
    case 4:  // CNES
      sql_select += ', co_cnes';
      sql_group += (indicador.criterioAgregacao!=0? ', co_cnes':'');
      break;
  }

  switch (indicador.periodicidade) {
    case 360:
      sql_select += ', co_ano::int  as ano';
      sql_group += (indicador.criterioAgregacao!=0? ', co_ano':'');
      break;
    case 30:
      sql_select += ', co_anomes::int  as anomes';
      sql_group += (indicador.criterioAgregacao!=0? ', co_anomes':'');
      break;
    case 1:
      sql_select += ', co_anomesdia::int  as anomesdia';
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
function tabulaResultado(result, indicadores){
  //TODO: Tornar dinamica a temporalidade
  var ano;
  var retorno=[];
  var itemTratado = {local:null};
  console.log('Formatando tabular');
  //TODO: Obedecer o tipo de consulta
  result.forEach(item =>{
    if(itemTratado.local==item.local){
      var obj = {};
      indicadores.forEach((key)=>{
        obj[key.toLowerCase()] = +item[key.toLowerCase()];
      });
      itemTratado[item.ano] = obj;
    }else{
      if(itemTratado.local){
        retorno.push(itemTratado);
        itemTratado = {municipio:item.local};
      }

      // Primeiro acesso
      Object.keys(item).forEach(key=>{
        if(key!='ano' && indicadores.indexOf(key.toUpperCase())==-1){
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
