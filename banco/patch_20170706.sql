-- DROP TABLE dbesusgestor.tb_unidade;

CREATE TABLE dbesusgestor.tb_plano
(
  co_plano serial NOT NULL,
  ds_sigla character varying(50) not null,
  ds_nome character varying(255) not null,
  ds_email character varying(100),
  ds_telefone character varying(50),
  ds_competencia text,
  ds_atividade text,
  co_unidade_pai integer,
  nu_nivel integer,
  st_informal boolean default 'F',
  CONSTRAINT tb_unidade_pkey PRIMARY KEY (co_unidade)
);

COMMENT ON TABLE dbesusgestor.tb_unidade IS 'Armazena as referencias de banco de dados que o SGI pode buscar as informações';
COMMENT ON COLUMN dbesusgestor.tb_unidade.co_unidade IS 'Código da unidade do MS';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_sigla IS 'Sigla da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_nome IS 'Nome da unidade de trabalho';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_competencia IS 'Descritivo com a competencia da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_atividade IS 'Descritivo com a atividade da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.co_unidade_pai IS 'Código da unidade pai da hierarquia';
COMMENT ON COLUMN dbesusgestor.tb_unidade.st_informal IS 'Flag indicando se a unidade é informal';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_telefone IS 'Telefone de contato com a unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_email IS 'Email de contato com a unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.nu_nivel IS 'Nivel na hierarquia';


alter table dbesusgestor.tb_unidade add CONSTRAINT tb_unidade_co_unidade_pai_fkey FOREIGN KEY (co_unidade_pai)
        REFERENCES dbesusgestor.tb_unidade (co_unidade) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

create unique index ux_tb_unidade_ds_sigla on dbesusgestor.tb_unidade (ds_sigla);

create table dbesusgestor.tb_unidade_hierarquia(
  co_unidade int not null,
  co_unidade_superior int not null
);
