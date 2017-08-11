alter table dbesusgestor.tb_municipio drop constraint fk_mun_no_mun;
drop table dbesusgestor.tb_hist_nome_municipio;
alter table dbesusgestor.tb_municipio drop constraint fk_mun_tempo;
alter table dbesusgestor.tb_municipio drop column co_tempo;
alter table dbesusgestor.tb_municipio drop column ds_nome_municipio;


insert into dbesusgestor.tb_municipio
 (co_ibge, co_uf, nu_municipio_siafi, no_municipio, nu_area_territorial, nu_altitude )
 select
 ibge, co_uf, coalesce(co_municipio_siafi,0), cidade, area_territorial, altitude from dbgeral.tb_ibge;
