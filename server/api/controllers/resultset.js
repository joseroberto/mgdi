const async = require('async');
const pg = require('pg');
const util = require('util');
const indicador = require('./indicador');
const NodeCache = require( "node-cache" );
const cache = new NodeCache();


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
      var tipo = '';
      var campo_agregacao = '';
      var tipoFiltro = '', tipoRegiao = '', codigoRegiao = '';

      console.log('Accept==>', req.headers.accept);
      if(req.swagger.params.tipo && req.swagger.params.tipo.value){
        tipo = req.swagger.params.tipo.value;
      } else{
        tipo = 'MUN';  // Default para tipo de pesquisa
      }
      // Filtro por uf, ibge, regiao,
      convertCodigoIndicador(req.swagger.params.codigos.value).then( result=>{
        var sql = '';
        console.log(result);
        switch (result.granularidade) {
          case 0:  // Nenhuma
            break;
          case 1:  // BR
            break;
          case 2:  // UF
            sql = montaQueryGranularidadeEstadual(result.ids, tipo);
            break;
          case 3:
            sql = montaQueryGranularidadeMunicipal(result.ids, tipo);
            break;
          default:
            sql = montaQueryGranularidadeMunicipal(result.ids, tipo);
        }
        console.log(sql);
        pool.query(sql,null, (err, result)=>{
          //console.log(result);
          if(err) {
            console.error('error running query', err);
            res.json({mensagem:err});
            return;
          }
          if(req.headers.accept === 'application/cda'){
            console.log('Formato==> application/cda');
            res.json(formataCDAResult(result, tipoFiltro, tipoRegiao, codigoRegiao));
          }else if (req.headers.accept === 'application/json') {
            console.log('Formato==> application/json');
            res.json(formataJSONResult(result, tipoFiltro, tipoRegiao, codigoRegiao));
          }else{
            res.status(500).send({codret: -1, mensagem: "Formato inválido"});
          }

        });
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

function convertCodigoIndicador(arrValue, granularidade){
  return new Promise((resolve, reject) => {
    var value = cache.get( JSON.stringify(arrValue));
    var arrIds = [];
    var arrTitulos = [];
    var arrCodigos = [];
    var granularidade = 0;

    if(value == undefined) {
      indicador.getIndicadorPesquisaPorCodigo(arrValue).then(result=>{
        result.forEach(item=>{
          arrIds.push(item.id);
          arrTitulos.push(item.titulo);
          arrCodigos.push(item.codigo);
          granularidade = item.granularidade; //TODO: Repensar o que fazer se os itens pesquisados nao pertencerem a mesma granularidade
        });

        var itemConsulta={
          ids: JSON.stringify(arrIds).replace('[','(').replace(']',')'),
          titulos: arrTitulos,
          granularidade: granularidade,
          codigos: arrCodigos
        };

        cache.set(JSON.stringify(arrValue), itemConsulta)
        resolve(cache.get( JSON.stringify(arrValue)));
      }).catch(err=>reject(err));
    }else {
        resolve(value);
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


function montaQueryGranularidadeMunicipal(ids, tipo){
  var isTipoMunicipio = (tipo=='MUN');
  var isTipoRegiao = (tipo == 'REG');
  var isTipoUF = (tipo=='UF');
  var isTipoBrasil = (tipo=='BR');

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
