insert into dbesusgestor.tb_indicador_classificacao (co_indicador_classificacao,ds_indicador_classificacao) values (0, 'Sem Classificação');
update dbesusgestor.tb_indicador set co_indicador_classificacao=0 where co_indicador_classificacao is null;
alter table dbesusgestor.tb_indicador alter column co_indicador_classificacao set not null;

--insert into dbmgi.tb_indicador_classificacao (co_indicador_classificacao,ds_indicador_classificacao) values (0, 'Sem Classificação');


--- Polaridade

create table dbesusgestor.tb_polaridade (
  co_polaridade int not null,
  ds_polaridade varchar(50) not null,
  CONSTRAINT tb_polaridade_pkey PRIMARY KEY (co_polaridade)
);

COMMENT ON TABLE dbesusgestor.tb_polaridade IS 'Armazena os tipos de polaridade dos indicadores';
COMMENT ON COLUMN dbesusgestor.tb_polaridade.co_polaridade IS 'Código da polaridade do indicador';
COMMENT ON COLUMN dbesusgestor.tb_polaridade.ds_polaridade IS 'Descrição da polaridade do indicador';

insert into dbesusgestor.tb_polaridade (co_polaridade, ds_polaridade) values (0, 'Sem polaridade');
insert into dbesusgestor.tb_polaridade (co_polaridade, ds_polaridade) values (1, 'Maior - melhor');
insert into dbesusgestor.tb_polaridade (co_polaridade, ds_polaridade) values (-1, 'Menor - melhor');

alter table dbesusgestor.tb_indicador add column co_polaridade int;
update dbesusgestor.tb_indicador set co_polaridade=0 where co_polaridade is null;
alter table dbesusgestor.tb_indicador alter column co_polaridade set not null;
