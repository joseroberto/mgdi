CREATE TABLE dbesusgestor.tb_granularidade
(
  co_granularidade int NOT NULL,
  ds_granularidade character varying(50) not null,
  CONSTRAINT tb_natureza_pkey PRIMARY KEY (co_granularidade)
);

COMMENT ON TABLE dbesusgestor.tb_granularidade IS 'Armazena os tipos de granularidade GEO utilizadas';
COMMENT ON COLUMN dbesusgestor.tb_granularidade.co_granularidade IS 'Código da granularidade GEO';
COMMENT ON COLUMN dbesusgestor.tb_granularidade.ds_granularidade IS 'Descrição da granularidade GEO';

insert into dbesusgestor.tb_granularidade (co_granularidade, ds_granularidade) values (0, 'Nenhuma');
insert into dbesusgestor.tb_granularidade (co_granularidade, ds_granularidade) values (1, 'Brasil');
insert into dbesusgestor.tb_granularidade (co_granularidade, ds_granularidade) values (2, 'Estado');
insert into dbesusgestor.tb_granularidade (co_granularidade, ds_granularidade) values (3, 'Município');
insert into dbesusgestor.tb_granularidade (co_granularidade, ds_granularidade) values (4, 'CNES');


CREATE TABLE dbesusgestor.tb_criterio_agregacao
(
  co_criterio_agregacao int NOT NULL,
  ds_criterio_agregacao character varying(50) not null,
  CONSTRAINT tb_criterio_agregacao_pkey PRIMARY KEY (co_criterio_agregacao)
);

COMMENT ON TABLE dbesusgestor.tb_criterio_agregacao IS 'Armazena os critérios de agregação utilizadas';
COMMENT ON COLUMN dbesusgestor.tb_criterio_agregacao.co_criterio_agregacao IS 'Código do critério de agregação';
COMMENT ON COLUMN dbesusgestor.tb_criterio_agregacao.ds_criterio_agregacao IS 'Descrição do critério de agregação';

insert into dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao, ds_criterio_agregacao) values (0, 'Sem agregação');
insert into dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao, ds_criterio_agregacao) values (1, 'Maior valor');
insert into dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao, ds_criterio_agregacao) values (2, 'Menor valor');
insert into dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao, ds_criterio_agregacao) values (3, 'Média');
insert into dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao, ds_criterio_agregacao) values (4, 'Soma');


alter table dbesusgestor.tb_indicador add column co_granularidade int not null default 0;
alter table dbesusgestor.tb_indicador add column co_criterio_agregacao int not null default 0;


alter table dbesusgestor.tb_indicador add CONSTRAINT tb_indicador_co_granularidade_fkey FOREIGN KEY (co_granularidade)
          REFERENCES dbesusgestor.tb_granularidade (co_granularidade) MATCH SIMPLE
          ON UPDATE NO ACTION ON DELETE NO ACTION;
alter table dbesusgestor.tb_indicador add CONSTRAINT tb_indicador_co_criterio_agregacao_fkey FOREIGN KEY (co_criterio_agregacao)
                    REFERENCES dbesusgestor.tb_criterio_agregacao (co_criterio_agregacao) MATCH SIMPLE
                    ON UPDATE NO ACTION ON DELETE NO ACTION;
