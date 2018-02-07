const async = require('async');
const pg = require('pg');
const util = require('util');
const indicador = require('./indicador');
const NodeCache = require( "node-cache" );
const cache = new NodeCache();
const config_param = require('../helpers/config')();

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

module.exports = {
  getResultado: (req, res)=>{
    var config = montaParametros(req.swagger.params);
    module.exports.consultaResultado(config).then( (resultado) =>{
        // req.headers.accept === 'application/json'
        switch (config.formato) {
          case 'LIN':
            res.json(resultado[0].rows);
            break;
          case 'CDA':
              res.json(module.exports.formataCDAResult(resultado[0].rows, resultado[0].fields, config, resultado[1]));
              break;
          case 'TAB':
              res.json(module.exports.formataJSONResult(resultado[0].rows, config, Object.keys(resultado[1])));
              break;
          default:
              res.status(500).send({mensagem: "Formato inválido"});
        }
      }, err =>{
        console.log('Erro no resultset', err);
        res.status(500).send(err);
      }
    );
  },
  consultaResultado: (config)=>{
    return new Promise((resolve, reject)=>{
      // Filtro por ano, uf, ibge, regiao,
      convertCodigoIndicador(config).then(indicadores=>{
        if(Object.keys(indicadores).length==0){
          console.log('Sem dados');
          reject({codret: -1, mensagem: "Indicador não encontrado"});
          return;
        }

        var sql = montaQuery(indicadores, config);
        console.log(sql);
        pool.query(sql,null, (err, result)=>{
          //console.log(result);
          if(err) {
            console.error('error running query', err);
            reject({mensagem:err});
            return;
          }
          resolve([result, indicadores]);
        });

      }, err=>{
        reject(err);
      });
    });
  },
  /*
    Formatador de saída para consultas CDA.
  */
   formataCDAResult: (result, fields, config, indicadores)=>{
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
    switch (config.tipo) {
      case 'BR':
        tipoRegiao='br';
        break;
      case 'RG':
        tipoRegiao='regiao';
        break;
      case 'UF':
        tipoRegiao='uf';
        break;
      case 'MN':
        tipoRegiao='municipio';
        break;
      case 'CN':
        tipoRegiao='cnes';
        break;
    }

    var numIndex = 0;

    fields.forEach(item=>{
      var key = item.name.toUpperCase();
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
      resultset: result,
      info: {tipoFiltro: config.filtro, tipoRegiao: config.tipo, codigoRegiao: config.valores_filtro},
      metadata: metadata
    };
  },

  /*
    Formatador de saída para consultas TABulares.
  */
  formataJSONResult: (result, config, indicadores)=>{
    var resultado = tabulaResultado(result, indicadores, config);
    return {
      rows: resultado.length,
      resultset: resultado,
      titulos: result.titulos,
      info: { tipoFiltro: config.filtro, tipoRegiao: config.tipo, codigoRegiao: config.valores_filtro}
    };
  }
}

/*
  Monta os uma saida de configuracao com o que e necessario
  para a consulta dinamica
*/
function montaParametros(paramEntrada){
  var ans = {};
  Object.keys(paramEntrada).forEach(key=>{
    ans[key] = paramEntrada[key].value;
  });
  return ans;
}

/*
  Converte o codigo alfanumerico do indicador em metadados
  necessarios para montagem dinamica da query de consulta.
*/
function convertCodigoIndicador(config){
  return new Promise((resolve, reject) => {
    var ans = {};
    var arrBusca = [];
    var granularidade = 0;
    var periodicidade = 0;
    var tipoGranularidade = 0;
    var arrValue = config.codigos;

    switch (config.tipo){
        case 'BR':
          tipoGranularidade = 1;
          break;
        case 'RG':
          tipoGranularidade = 2;
          break;
        case 'UF':
          tipoGranularidade = 3;
          break;
        case 'MN':
          tipoGranularidade = 4;
          break;
        case 'CN':
          tipoGranularidade = 5;
          break;
    }

    if(!arrValue){
      reject('Parametro de consulta vazio');
    }
    //if(arrValue.length==0){
    //  reject('Indicador não encontrado');
    //}
    //arrValue.forEach((itemArr)=>{
        // Recupera do cache aqueles que são possíveis
        //var value = cache.get(itemArr.trim());
        //if(value != undefined) {
          //console.log('Recuperando do cache:', itemArr, value, value.granularidade);
          //ans[itemArr.trim()] = value;
          // Testa granularidade.  Se difere deve dar um erro
          //var value = itemArr;
          //if(granularidade==0){
          //  granularidade = value.granularidade;
          //}
          //if(value.granularidade!=granularidade){
          //  reject('Conjunto de indicadores com granularidade diferentes');
          //}
          //if(value.granularidade<tipoGranularidade){
          //  reject(`Indicador ${itemArr} com granularidade menor que o tipo de consulta requerida`);
          //}

          //if(value.granularidade>tipoGranularidade && value.criterioAgregacao==0){
          //  reject(`Indicador ${itemArr} com granularidade diferente do tipo de consulta e sem critério de agregação definido`);
          //}
          // Testa periodicidade.  Se difere deve dar um erro
          //if(periodicidade==0){
          //  periodicidade = value.periodicidade;
          //}
          //if(value.periodicidade!=periodicidade){
          //  reject('Conjunto de indicadores com periodicidades diferentes');
          //}
        //}else{
        //  console.log('Repassando para busca', itemArr);
          //arrBusca.push(itemArr.trim());
        //}
    //});
    //if(arrBusca && arrBusca.length>0) {
      // Pesquisa no banco o que nao tiver no cache
      indicador.getIndicadorPesquisaPorCodigo(arrValue).then(result=>{
        result.forEach(item=>{
          console.log('item==>', item);
          ans[item.codigo] = {
            id: item.id,
            titulo: item.titulo,
            descricao: item.descricao,
            granularidade: item.Granularidade.codigo,
            banco: item.BancoDados,
            tipoConsulta: item.TipoConsulta.codigo,
            sql: item.referencia_consulta,
            criterioAgregacao: item.CriterioAgregacao.codigo,
            periodicidade: item.PeriodicidadeAtualizacao.codigo,
            ultima_atualizacao: item.ultima_atualizacao,
            tipo: 'valor'
          };
          // Testa tipos de consulta
          if(ans[item.codigo].tipoConsulta!=2 && ans[item.codigo].tipoConsulta!=3){ // Tratar depois a formula
            reject({codret: 1010, message: `Tipo de consulta (${ans[item.codigo].tipoConsulta}) incompatível ou indicador sem informação`});
          }
          // Testa tipos de periodicidade
          if(ans[item.codigo].periodicidade!=30 && ans[item.codigo].periodicidade!=360){ // Tratar depois a periodicidade
            reject({codret: 1011, message: "Consulta o tipo de periodicidade do indicador ainda não foi desenvolvida"});
          }

          //cache.set(item.codigo, ans[item.codigo]);
          // Testa granularidade.  Se difere deve dar um erro
          if(granularidade==0){
            granularidade = ans[item.codigo].granularidade;
          }
          if(ans[item.codigo].granularidade!=granularidade){
            reject({codret: 1001, message: "Conjunto de indicadores com granularidade diferentes"});
          }
          if(ans[item.codigo].granularidade<tipoGranularidade){
            reject({codret: 1001, message: `Indicador ${item.codigo} com granularidade menor que o tipo de consulta requerida`});
          }
          if(ans[item.codigo].granularidade>tipoGranularidade && item.criterio_agregacao==0){
            reject({codret: 1001, message: `Indicador ${item.codigo} com granularidade diferente do tipo de consulta e sem critério de agregação definido`});
          }
          // Testa periodicidade.  Se difere deve dar um erro
          if(periodicidade==0){
            periodicidade = ans[item.codigo].periodicidade;
          }
          if(ans[item.codigo].periodicidade!=periodicidade){
            reject({codret: 1001, message: 'Conjunto de indicadores com periodicidades diferentes'});
          }
        });
        //console.log('ans', ans);
        resolve(ans);
      }).catch(err=>{
        console.log('Erro real==>', err);
        reject({codret: 1001, message: "Erro na pesquisa dos resultados do indicador"});
      });
    //}else {
    //    resolve(ans);
    //}
  });
}

/*
  Montador de query de consulta genérica.
*/
function montaQuery(indicadores, config){

  var sql_with='WITH ';
  (Object.keys(indicadores)).forEach(key=>{
      // monta query conforme o tipo de consulta
      switch (indicadores[key].tipoConsulta) {
        case 2: // Query
          sql_with += `${key} AS ( ${indicadores[key].sql} ),`;
          break;
        case 3: // Importação
          sql_with += `${key} AS ( ${ montaQueryValorIndicador(key, indicadores[key], config)} ),`;
          break;
      }
  });
  sql_with = sql_with.substr(0,sql_with.length - 1);

  var sql = montaQueryComplemento(indicadores, config);
  return `${sql_with} ${sql}`

}

function montaQueryComplemento(indicadores, config){
    var select = '';
    var from = 'from ';
    //var where = 'where '; //Essa vai ficar para os filtros
    var groupby = '';
    var orderby = '';

    var varPeriodicidade = '';
    var nomeCampo = '';
    var indicadorAnterior = '';
    var referencia = indicadores[Object.keys(indicadores)[0]];

    switch (referencia.periodicidade) {
      case 360:
        varPeriodicidade = 'ano';
        nomeCampo='co_ano';
        break;
      case 30:
        varPeriodicidade = 'anomes';
        nomeCampo='co_anomes';
        break;
      case 1:
        varPeriodicidade = 'anomesdia';
        nomeCampo='co_anomesdia';
        break;
      default:
    }

    select += `${Object.keys(indicadores)[0]}.${varPeriodicidade},`;
    groupby += `${Object.keys(indicadores)[0]}.${varPeriodicidade},`;

    switch (config.tipo) {
      case 'RG':
        // Testar o parametro
        select += `reg.ds_regiao as regiao, reg.co_regiao as codigogeo,`;
        from += `${schema}.tb_municipio mun
                      inner join ${schema}.tb_uf uf on uf.co_uf=mun.co_uf
                      inner join ${schema}.tb_regiao reg on reg.co_regiao=uf.co_regiao`;
        groupby += `reg.ds_regiao, reg.co_regiao,`;
        orderby += `reg.ds_regiao,`;
        break;
      case 'UF':
        // Testar o parametro
        select += `uf.no_uf as uf,reg.ds_regiao as regiao, uf.co_uf as codigogeo,`;
        from += `${schema}.tb_municipio mun
                      inner join ${schema}.tb_uf uf on uf.co_uf=mun.co_uf
                      inner join ${schema}.tb_regiao reg on reg.co_regiao=uf.co_regiao`;
        groupby += `uf.no_uf,reg.ds_regiao, uf.co_uf,`;
        orderby += `uf.no_uf, reg.ds_regiao,`;
        break;
      case 'MN':
        // Testar o parametro
        select += `uf.no_uf as uf,reg.ds_regiao as regiao, mun.no_municipio as local, mun.co_ibge as codigogeo,`;
        from += `${schema}.tb_municipio mun
                      inner join ${schema}.tb_uf uf on uf.co_uf=mun.co_uf
                      inner join ${schema}.tb_regiao reg on reg.co_regiao=uf.co_regiao`;
        groupby += `uf.no_uf,reg.ds_regiao, mun.no_municipio, mun.co_ibge,`;
        orderby += `uf.no_uf, reg.ds_regiao, mun.no_municipio,`;
        break;
    }
    orderby += `${Object.keys(indicadores)[0]}.${varPeriodicidade},`;

    (Object.keys(indicadores)).forEach(key=>{
        switch (indicadores[key].criterioAgregacao) {
          case 0: // Sem agregacao
            select += ` ${key}::float,`;
            break;
          case 1: // Maior valor
            select += ` MAX(${key})::float  as${key},`;
            break;
          case 2: // Menor valor
            select += ` MIN(${key})::float  ${key},`;
            break;
          case 3: // Media
            select += ` AVG(${key})::float  ,${key},`;
            break;
          case 4: // Soma
            select += ` SUM(${key})::float ${key},`;
            break;
        }
        if(!(referencia.granularidade==0 || config.tipo=='BR')){
          //from += ` FULL OUTER JOIN ${key} `;
          from += ` INNER JOIN ${key} `;
          // granularidade
          switch (referencia.granularidade) {
            case 3: //UF
              from += `ON ${key}.uf = uf.co_uf `;
              break;
            case 4: //Municipio
              from += `ON ${key}.ibge = mun.co_ibge `;
              break;
          }
        }else
          from += ` ${key} `;

        // ano
        if(indicadorAnterior){
          from += `AND ${key}.${varPeriodicidade} = ${indicadorAnterior}.${varPeriodicidade} `
        }
        indicadorAnterior = key;
    });

    // Filtro por uf, ibge, regiao,
    var where = 'where 1=1';
    switch (config.filtro) {
      case 'UF':
        if(config.valores_filtro){
          where = where + ' AND uf.co_uf IN ('+ config.valores_filtro+')';
        }
        break;
      case 'REG':
        if(config.valores_filtro){
          where = where + ' AND floor(mun.co_uf/10)  IN (' + config.valores_filtro+')';
        }
        break;
      case 'MUN':
        if(config.valores_filtro){
          where = where + ' AND mun.co_ibge IN (' + config.valores_filtro+')';
          codigoRegiao = config.valores_filtro;
        }
        break;
      case 'MET':
      case 'CID':
      case 'CCL':
      case 'FRT':
      case 'QUA':
      case 'SA':
      case 'AL':
      case 'RIB':
      case 'QSU':
        if(config.valores_filtro){
          filtro = ' AND agr.co_agrupamento IN (' + config.valores_filtro+')';
        }else{
          filtro = '';
        }
        where = where +  ` AND mun.co_ibge IN ( select co_ibge from ${schema}.tb_municipio_agrupamento mua
          inner join ${schema}.tb_agrupamento agr on mua.co_agrupamento = agr.co_agrupamento
          inner join ${schema}.tb_categoria cat on cat.co_categoria = agr.co_categoria
          where cat.ds_sigla = '${config.filtro}' ${filtro})`
        break;

    }

    if(referencia.criterioAgregacao==0){
      groupby='';
    }

    if(select){
      select = 'select ' + select.substr(0,select.length - 1); // Retira a ultima virgula
    }

    if(orderby){
      orderby = 'order by ' + orderby.substr(0,orderby.length - 1); // Retira a ultima virgula
    }

    if(groupby){
      groupby = 'group by ' + groupby.substr(0,groupby.length - 1); // Retira a ultima virgula
    }

    //console.log(`${select} ${from} ${where} ${groupby} order by ${orderby};`);

    var query = `${select} ${from} ${where} ${groupby} ${orderby}`;
    // Filtro de ano, anomes ou anomesdia
    if(config.data){
      var filtroData = '';
      if(config.data<0)
        filtroData= `select distinct ${nomeCampo} from ${schema}.${config_param.tabela_indicadores} where co_seq_indicador in (${Object.keys(indicadores).map(a=>indicadores[a].id).toString()}) order by 1 desc limit ${(-1)*config.data}`
      else
        filtroData=`${config.data}`;
      query = `select * from (${query}) as tab where ${varPeriodicidade} in (${filtroData})`;
    }

    return query;
}

function montaQueryValorIndicador(codigo, indicador, config){
  var sql_select = 'select ';
  var sql_group = 'group by ';

  //console.log('montaQueryValorIndicador', indicador);

  switch (indicador.criterioAgregacao) {
    case 0: // Sem agregacao
      sql_select += ` nu_valor::float  as ${codigo}`;
      break;
    case 1: // Maior valor
      sql_select += ` MAX(nu_valor)::float  as${codigo}`;
      break;
    case 2: // Menor valor
      sql_select += ` MIN(nu_valor)::float  ${codigo}`;
      break;
    case 3: // Media
      sql_select += ` AVG(nu_valor)::float  ${codigo}`;
      break;
    case 4: // Soma
      sql_select += ` SUM(nu_valor)::float  ${codigo}`;
      break;
  }

  if(!(indicador.granularidade==0 || config.tipo=='BR')){
    switch (indicador.granularidade) {
      case 3:  // UF
        sql_select += ', co_uf::int  as uf';
        sql_group += (indicador.criterioAgregacao!=0 ? 'co_uf,':'');
        break;
      case 4:  // Municipio
        sql_select += ', co_ibge::int  as ibge';
        sql_group += (indicador.criterioAgregacao!=0 ? 'co_ibge,':'');
        break;
      case 5:  // CNES
        sql_select += ', co_cnes';
        sql_group += (indicador.criterioAgregacao!=0? 'co_cnes,':'');
        break;
    }
  }

  switch (indicador.periodicidade) {
    case 360:
      sql_select += ', co_ano  as ano';
      sql_group += (indicador.criterioAgregacao!=0? 'co_ano,':'');
      break;
    case 30:
      sql_select += ', co_anomes  as anomes';
      sql_group += (indicador.criterioAgregacao!=0? 'co_anomes,':'');
      break;
    case 1:
      sql_select += ', co_anomesdia  as anomesdia';
      sql_group += (indicador.criterioAgregacao!=0? 'co_anomesdia,':'');
      break;
    default:
  }

  if(indicador.criterioAgregacao==0){
    sql_group='';
  }else{
    sql_group = sql_group.substr(0,sql_group.length - 1);
  }

  return `${sql_select} from ${schema}.${config_param.tabela_indicadores}
  where co_seq_indicador=${indicador.id} ${sql_group}`;

}
/*
  Funcao para tabular resulado

  Objetivo: Tratar a saída do JSON onde o objeto está com o item detalhado
            em linhas e alinhar a temporalidade como um conjunto interno

  Premissa: Dados organizados em Ano e por municipio
*/
function tabulaResultado(result, indicadores, config){
  //TODO: Tornar dinamica a temporalidade
  var retorno=[];
  var itemTratado = {};
  var field = '';

  console.log('Formatando tabular');
  //TODO: Obedecer o tipo de consulta
  switch (config.tipo) {
    case 'BR':
      field = 'ano';
      break;
    case 'RG':
      field = 'regiao';
      break;
    case 'UF':
      field = 'uf';
      break;
    case 'MN':
      field = 'codigogeo';
      break;
  }
  itemTratado[field] = null;
  result.forEach(item =>{
    if(itemTratado[field]!=item[field]){
      //console.log('Trocando ident', item[field]);
      itemTratado = {};
      retorno.push(itemTratado);
      itemTratado[field] = item[field];
      // Complementa cos campos que não sejam nem ano nem um valor de indicador
      Object.keys(item).forEach(key=>{
        if(key!='ano' && indicadores.indexOf(key.toUpperCase())==-1){
          itemTratado[key] = item[key];
        }
      });
    }
    var obj = {};
    itemTratado['periodo']={};
    indicadores.forEach((key)=>{
      obj[key.toLowerCase()] = +item[key.toLowerCase()];
    });

    itemTratado.periodo[item.ano] = obj;
  });

  return retorno;
}
