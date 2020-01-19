-- acrescenta o login por sigla da aplicacao
alter table dbesusgestor.tb_aplicacao add column ds_sigla varchar(10);
update dbesusgestor.tb_aplicacao set ds_sigla='MGI' where co_aplicacao=1;
alter table dbesusgestor.tb_aplicacao alter column ds_sigla set not null;

-- cria uma coluna de anomes na tabela tempo. vai ajudar nas consultas
alter table dbesusgestor.tb_tempo add column co_anomes char(6);
update dbesusgestor.tb_tempo set co_anomes=substring(co_anomesdia from 1 for 6);
alter table dbesusgestor.tb_tempo alter column co_anomes set not null;

-- acrescenta uma coluna anomes para a tabela de resultado
alter table dbesusgestor.tb_resultado add column co_anomes char(6);
create index ix_tb_resultado_co_anomes on dbesusgestor.tb_resultado(co_anomes);

alter table dbesusgestor.tb_tempo alter column co_anomes type int USING co_anomes::integer;
alter table dbesusgestor.tb_resultado alter column co_anomes type int USING co_anomes::integer;

------Não é patch -> somente para armazenar a query de população de indicadores quantitativos

select co_seq_indicador from dbesusgestor.tb_indicador where co_indicador='DSHG';

WITH
TEMPO AS (
select distinct nu_ano as ano, co_anomes as anomes from dbesusgestor.tb_tempo where co_anomes between '201701' AND '202001' order by 1),
MUNICIPIO AS (
select co_ibge as ibge, co_uf as uf from dbesusgestor.tb_municipio
)

insert into dbesusgestor.tb_resultado
(co_seq_indicador, co_ano, co_anomes, co_ibge, co_uf, nu_valor, dt_inclusao)
select 1029, ano, anomes, ibge, uf, (random() * 10000 + 1)::int as valor,now() from TEMPO CROSS JOIN  MUNICIPIO;


