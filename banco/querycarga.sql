insert into dbesusgestor.tb_indicador
(co_indicador, co_unidade_medida, co_indicador_classificacao, ds_titulo,
ds_conceituacao, ds_interpretacao, ds_objetivo, ds_uso, ds_metodo_calculo, ds_limitacao, ds_fonte_dados, ds_observacao, st_acumulativo, st_privado, ds_referencia_consulta, co_tipo_consulta, ds_descricao)
select co_indicador,co_unidade_medida,co_classificacao_indicador, ds_indicador,
ds_conceituacao,ds_interpretacao,ds_objetivo,ds_uso,ds_metodo_calculo,ds_limitacao,
ds_fonte_dados, ds_obs_geral, st_indicador_acumulativo, not st_publico, ds_sql,
case when ds_sql is not null then 2 else 0 end, ds_indicador from dbpainel.tb_indicador;

