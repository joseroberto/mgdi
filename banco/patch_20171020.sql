alter table dbesusgestor.tb_municipio_agrupamento drop column co_categoria;

CREATE SEQUENCE dbesusgestor.sk_agrupamento;
ALTER TABLE dbesusgestor.tb_agrupamento ALTER COLUMN co_agrupamento SET DEFAULT nextval('dbesusgestor.sk_agrupamento');
ALTER TABLE dbesusgestor.tb_agrupamento ALTER COLUMN ds_agrupamento type varchar(200);
alter table dbesusgestor.tb_categoria add column ds_sigla varchar(3);
ALTER SEQUENCE dbesusgestor.tb_categoria_co_categoria_seq RESTART WITH 1;


insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Zona Metropolitana', 'MET');
insert into dbesusgestor.tb_agrupamento (co_agrupamento, co_categoria, ds_agrupamento)
select co_metropolitana,1, no_metropolitana from dbgeral.tb_metropolitana order by co_metropolitana;
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, codigo_id_metropolitana
from dbgeral.tb_ibge a where codigo_id_metropolitana is not null and codigo_id_metropolitana>0;


insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Qualisus', 'QSU');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento)
select co_qualisus+50, 2, no_qualisus from dbgeral.tb_qualisus order by co_qualisus;
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, co_id_qualisus + 50
from dbgeral.tb_ibge a where co_id_qualisus is not null and co_id_qualisus>0;


insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Sisfronteiras', 'FRT');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento) values (66, 3, 'Sisfronteiras');
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, 66 from dbgeral.tb_ibge a where sis_fronteiras=1;

insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Qualifar', 'QUA');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento) values (67, 4, 'Qualifar');
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, 67 from dbgeral.tb_ibge a where habilitados_qualifar=1;

insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Semi-árido', 'SA');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento) values (68, 5, 'Semi-árido');
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, 68 from dbgeral.tb_ibge a where semi_arido=1;

insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Amazônia Legal', 'AL');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento) values (69,6, 'Amazônia Legal');
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, 69 from dbgeral.tb_ibge a where amazonia_legal=1;

insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Ribeirinhos', 'RIB');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento) values (70, 7, 'Ribeirinhos');
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, 70 from dbgeral.tb_ibge a where co_ride=1;


insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Território da Cidadania', 'CID');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento)
select co_territorio_cidadania+71, 8, no_territorio_cidadania_resumido from dbgeral.tb_territorio_cidadania order by co_territorio_cidadania;
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, co_tr_cidadania + 71
from dbgeral.tb_ibge a where co_tr_cidadania>0;


insert into dbesusgestor.tb_categoria (ds_categoria, ds_sigla) values ('Colegiado', 'CCL');
insert into dbesusgestor.tb_agrupamento (co_agrupamento,co_categoria, ds_agrupamento)
select co_colegiado+197, 9, no_colegiado from dbgeral.tb_colegiado_gestao order by co_colegiado;
insert into dbesusgestor.tb_municipio_agrupamento (co_ibge, co_agrupamento)
select distinct ibge, co_colegiado + 197
from dbgeral.tb_ibge a where co_colegiado>0;


select max(co_agrupamento) from dbesusgestor.tb_agrupamento;

ALTER SEQUENCE dbesusgestor.sk_agrupamento RESTART WITH 53199;
