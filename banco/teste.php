<?php
//
//baseado em hanseniaseEpidemiologicoData.php
//teste para uso em paineis/hanseniase/teste.php
//
include(dirname(__FILE__).'/../../conecta.php');
include(dirname(__FILE__).'/../dadosFiltro.php');	// Filtro das regiões (agora como include)
include(dirname(__FILE__).'/../filtro.php');	// Filtro das regiões (agora como include)
//
//define qual o tipo de agregacao de dados verificando os parametros de filtro do portal
//
$tipoFiltro = "nacional";
$tipoRegiao = "brasil";
$codigoRegiao = "";

//
//default
//
$regiao___ = "tb_ibge.regiao";
$co_uf___ = "co_uf";
$uf___ = "tb_ibge.uf";
$tb_ibge_co_uf___ = "tb_ibge.co_uf";
$join___ = "";
$joinagravo___ = "";
//
//se for para uma regiao especifica que nao e subdividida em UF
//
if(!empty($ibge) || !empty($uf) || strlen($regiao) == 2){
	$regiao___ = "tb_ibge.uf";
	$co_uf___ = "co_ibge";
	$uf___ = "tb_ibge.cidade";
	$tb_ibge_co_uf___ = "tb_ibge.ibge";
	$tipoFiltro = "regional";
	$tipoRegiao = "uf";
	if(strlen($regiao) == 2){
		$tipoRegiao = $regiao;
	}
	$codigoRegiao = $uf;
	if(!empty($ibge)){
		$tipoFiltro = "municipal";
		$tipoRegiao = "municipio";
		$codigoRegiao = $ibge;
	}
	if(!empty($cg)){
		$tipoRegiao = "CG";
		$codigoRegiao = $cg;
	}
	if($regiao == "RM"){
		$tipoRegiao = "RM";
		$tipoFiltro = "nacional";
		//$uf___ = "tb_ibge.cidade||' '||tb_ibge.uf";
		$where = str_replace("dbgeral.","",$where);
		if(!empty($rm)){
			$codigoRegiao = $rm;
		}
	}
}
$sql = 'WITH
tb_ibge AS (
	SELECT
	tb_ibge_regiao___,
	tb_ibge_co_uf___,
	tb_ibge_uf___,
	tabpop.ano_pop as ano,
	sum(tabpop.pop_me_15) as pop_me_15,
	sum(tabpop.pop) as pop_
	FROM
	dbgeral.tb_pop_faixas AS tabpop
	INNER JOIN dbgeral.tb_ibge AS tb_ibge ON tabpop.co_ibge = tb_ibge.ibge
	join___
	WHERE  ' . $where . ' AND tabpop.pop_me_15 > 0 AND tabpop.pop > 0 AND tabpop.ano_pop > 2000
	group by tabpop.ano_pop,tb_ibge_uf___,tb_ibge_co_uf___,tb_ibge_regiao___
),
tab1 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 10
	GROUP BY
	co_uf___,nu_ano_ref
),
tab2 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_grau2_deformidade
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 82
	GROUP BY
	co_uf___,nu_ano_ref
),
tab3 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_pop_geral
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 16
	GROUP BY
	co_uf___,nu_ano_ref
),
tab4 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS curados_anos_coortes
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 310
	GROUP BY
	co_uf___,nu_ano_ref
),
tab5 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS novos_diag_anos_coortes
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 320
	GROUP BY
	co_uf___,nu_ano_ref
),
tab6 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_registrados
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 90
	GROUP BY
	co_uf___,nu_ano_ref
),
tab7 AS (
	SELECT co_uf___,nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_examinados
	FROM
	morbi_mortalidade2.tb_casos_agravo_hanseniase
	joinagravo___
	WHERE
	co_agravo = 4 AND
	co_grupo_agravo = 80
	GROUP BY
	co_uf___,nu_ano_ref
)
SELECT
tb_ibge_regiao___ AS "Região", tb_ibge_uf___ AS "Local", tb_ibge_co_uf___ AS "codigogeo",
tb_ibge.ano,
deteccao_menores_15_anos AS "Detecção em menores de 15 anos",
deteccao_grau2_deformidade AS "Detecção de grau II de deformidade",
deteccao_pop_geral AS "Detecção na pop. geral",
tb_ibge.pop_ AS "População",
tb_ibge.pop_me_15 AS "População menor de 15 anos",
curados_anos_coortes AS "Casos curados nos anos das coortes",
novos_diag_anos_coortes AS "Casos novos diagnosticados nos anos das coortes",
contatos_registrados AS "Contatos intradomiciliares registrados",
contatos_examinados AS "Contatos intradomiciliares examinados"
FROM
tb_ibge
left JOIN tab1 ON tb_ibge_co_uf___ = tab1.co_uf___ AND tb_ibge.ano = tab1.ano
left JOIN tab2 ON tb_ibge_co_uf___ = tab2.co_uf___ AND tb_ibge.ano = tab2.ano
left JOIN tab3 ON tb_ibge_co_uf___ = tab3.co_uf___ AND tb_ibge.ano = tab3.ano
left JOIN tab4 ON tb_ibge_co_uf___ = tab4.co_uf___ AND tb_ibge.ano = tab4.ano
left JOIN tab5 ON tb_ibge_co_uf___ = tab5.co_uf___ AND tb_ibge.ano = tab5.ano
left JOIN tab6 ON tb_ibge_co_uf___ = tab6.co_uf___ AND tb_ibge.ano = tab6.ano
left JOIN tab7 ON tb_ibge_co_uf___ = tab7.co_uf___ AND tb_ibge.ano = tab7.ano
join___
ORDER BY tb_ibge_regiao___, tb_ibge_co_uf___, tb_ibge.ano';
//
//faz as substituicoes
//
$sql = str_replace("tb_ibge_co_uf___",$tb_ibge_co_uf___,$sql);
$sql = str_replace("tb_ibge_regiao___",$regiao___,$sql);
$sql = str_replace("tb_ibge_uf___",$uf___,$sql);
$sql = str_replace("co_uf___",$co_uf___,$sql);

$sql = str_replace("join___",$join___,$sql);
$sql = str_replace("joinagravo___",$joinagravo___,$sql);
//echo $sql;exit;
ob_clean();
$result = pg_fetch_all(pg_query($sql));
if(extension_loaded('zlib')){
	ob_start('ob_gzhandler');
}
echo json_encode(
	array(
		"resultset" => $result,
		"info"=>array(
			"tipoFiltro"=>$tipoFiltro,
			"tipoRegiao"=>$tipoRegiao,
			"codigoRegiao"=>$codigoRegiao
		),
		"metadata"=>array(
			array('colIndex'=>0, 'colType'=>'String','colName'=>'Região','resumo'=>'Região agregada','tipo'=>'geo'),
			array('colIndex'=>1, 'colType'=>'String','colName'=>'Local','resumo'=>'Região desagregada','tipo'=>'geo'),
			array('colIndex'=>2, 'colType'=>'String','colName'=>'codigogeo','resumo'=>'Código da unidade','tipo'=>'id'),
			array('colIndex'=>3, 'colType'=>'Numeric','colName'=>'Ano','resumo'=>'Ano da ocorrência','tipo'=>'ano'),
			array('colIndex'=>4, 'colType'=>'Numeric','colName'=>'Detecção em menores de 15 anos','resumo'=>'Casos novos em menores de 15 anos de idade residentes em determinado local e diagnosticados no ano da avaliação','tipo'=>'valor'),
			array('colIndex'=>5, 'colType'=>'Numeric','colName'=>'Detecção de grau II de deformidade','resumo'=>'Casos novos com grau 2 de incapacidade física no diagnóstico, residentes em determinado local e detectados no ano da avaliação','tipo'=>'valor'),
			array('colIndex'=>6, 'colType'=>'Numeric','colName'=>'Detecção na pop. geral','resumo'=>'Número de casos novos residentes em determinado local e diagnosticados no ano da avaliação','tipo'=>'valor'),
			array('colIndex'=>7, 'colType'=>'Numeric','colName'=>'População','resumo'=>'População total residente no mesmo local e período','tipo'=>'valor'),
			array('colIndex'=>8, 'colType'=>'Numeric','colName'=>'População menor de 15 anos','resumo'=>'População de 0 a 14 anos no mesmo local e período','tipo'=>'valor'),
			array('colIndex'=>9, 'colType'=>'Numeric','colName'=>'Casos curados nos anos das coortes','resumo'=>'Casos novos de hanseníase residentes em determinado local, diagnosticados nos anos das coortes e curados até 31 de dezembro do ano de avaliação ','tipo'=>'valor'),
			array('colIndex'=>10, 'colType'=>'Numeric','colName'=>'Casos novos diagnosticados nos anos das coortes','resumo'=>'Total de casos novos de hanseníase residentes no mesmo local e diagnosticados nos anos das coortes','tipo'=>'valor'),
			array('colIndex'=>11, 'colType'=>'Numeric','colName'=>'Contatos intradomiciliares registrados','resumo'=>'Total de contatos intradomiciliares registrados referentes aos  casos novos de hanseníase residentes no mesmo local e diagnosticados no ano de avaliação','tipo'=>'valor'),
			array('colIndex'=>12, 'colType'=>'Numeric','colName'=>'Contatos intradomiciliares examinados','resumo'=>'Número de contatos intradomiciliares examinados referente aos casos novos residentes em determinado local e diagnosticados no ano da avaliação','tipo'=>'valor')
		)
	)
);
if(extension_loaded('zlib')){
	ob_end_flush();
}
?>
