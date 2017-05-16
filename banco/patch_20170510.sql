alter table dbesusgestor.tb_indicador_relacionado add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_relacionado add column dt_atualizacao timestamp without time zone;

alter table dbesusgestor.tb_indicador_categoria_analise add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_categoria_analise add column dt_atualizacao timestamp without time zone;

COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.dt_atualizacao IS 'Data de alteração do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.dt_atualizacao IS 'Data de alteração do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador.dt_atualizacao IS 'Data de alteração do registro';

alter table dbesusgestor.tb_indicador add column co_tipo_consulta integer not null default 0;
alter table dbesusgestor.tb_indicador add column ds_referencia_consulta text;
alter table dbesusgestor.tb_indicador add column co_banco_dados integer not null default 0;
alter table dbesusgestor.tb_indicador add column ds_procedimento_operacional text;
alter table dbesusgestor.tb_indicador add column st_carga_manual boolean default 'f';

COMMENT ON COLUMN dbesusgestor.tb_indicador.co_tipo_consulta IS 'Tipos de consulta: Formula, Query, etc';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_referencia_consulta IS 'Referencia de acordo com o tipo de consulta';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_banco_dados IS 'Banco de dados existentes';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_procedimento_operacional IS 'Dados sobre o procedimento operacional necessario para operar o indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_carga_manual IS 'Flag se o indicador e encontrado a partir de carga de dados';

-- DROP TABLE dbesusgestor.tb_banco

CREATE TABLE dbesusgestor.tb_banco_dados
(
  co_banco_dados integer NOT NULL,
  ds_banco_dados character varying(100) not null,
  ds_url character varying(255) not null,
  CONSTRAINT tb_banco_pkey PRIMARY KEY (co_banco_dados)
);

COMMENT ON TABLE dbesusgestor.tb_banco_dados IS 'Armazena as referencias de banco de dados que o SGI pode buscar as informações';
COMMENT ON COLUMN dbesusgestor.tb_banco_dados.co_banco_dados IS 'Código do banco de dados';
COMMENT ON COLUMN dbesusgestor.tb_banco_dados.ds_banco_dados IS 'Descrição do banco de dados';
COMMENT ON COLUMN dbesusgestor.tb_banco_dados.ds_url IS 'URL para acessso a base de dados';

insert into dbesusgestor.tb_banco_dados (co_banco_dados, ds_banco_dados, ds_url) values (0, 'Sem informação', '');
insert into dbesusgestor.tb_banco_dados (co_banco_dados, ds_banco_dados, ds_url) values (1, 'SAGE', 'http://10.1.2.25');

CREATE TABLE dbesusgestor.tb_tipo_consulta
(
  co_tipo_consulta integer NOT NULL,
  ds_tipo_consulta character varying(255) not null,
  CONSTRAINT tb_tipo_consulta_pkey PRIMARY KEY (co_tipo_consulta)
);

COMMENT ON TABLE dbesusgestor.tb_tipo_consulta IS 'Armazena os tipos de consulta';
COMMENT ON COLUMN dbesusgestor.tb_tipo_consulta.co_tipo_consulta IS 'Código do tipo de consulta';
COMMENT ON COLUMN dbesusgestor.tb_tipo_consulta.co_tipo_consulta IS 'Descrição do tipo de consulta';

insert into dbesusgestor.tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) values (0, 'Sem informação');
insert into dbesusgestor.tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) values (1, 'Fórmula');
insert into dbesusgestor.tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) values (2, 'Query');

alter table dbesusgestor.tb_indicador add CONSTRAINT tb_indicador_co_banco_dados_fkey FOREIGN KEY (co_banco_dados)
        REFERENCES dbesusgestor.tb_banco_dados (co_banco_dados) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

alter table dbesusgestor.tb_indicador add CONSTRAINT tb_indicador_co_tipo_consulta_fkey FOREIGN KEY (co_tipo_consulta)
                REFERENCES dbesusgestor.tb_tipo_consulta (co_tipo_consulta) MATCH SIMPLE
                ON UPDATE NO ACTION ON DELETE NO ACTION;
