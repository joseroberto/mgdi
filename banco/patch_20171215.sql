DROP TABLE dbesusgestor.tb_programa_meta_hierarquia;
DROP TABLE dbesusgestor.tb_programa_meta;

CREATE TABLE dbesusgestor.tb_plano
(
  co_plano serial NOT NULL,
  ds_sigla varchar(10) not null,
  ds_programa character varying(50) not null,
  ds_detalhamento text,
  co_plano_pai integer,
  nu_nivel integer,
  CONSTRAINT tb_plano_pkey PRIMARY KEY (co_plano)
);

COMMENT ON TABLE dbesusgestor.tb_plano IS 'Armazena os programas';
COMMENT ON COLUMN dbesusgestor.tb_plano.co_plano IS 'Código interno para o plano - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_plano.ds_sigla IS 'Sigla do item do programa';
COMMENT ON COLUMN dbesusgestor.tb_plano.ds_programa IS 'Descrição do item de programa';
COMMENT ON COLUMN dbesusgestor.tb_plano.ds_detalhamento IS 'Nome da unidade de trabalho';
COMMENT ON COLUMN dbesusgestor.tb_plano.co_plano_pai IS 'Referência ao programa pai';
COMMENT ON COLUMN dbesusgestor.tb_plano.nu_nivel IS 'Nivel na hierarquia';


alter table dbesusgestor.tb_plano add CONSTRAINT tb_plano_co_programa_pai_fkey FOREIGN KEY (co_plano_pai)
        REFERENCES dbesusgestor.tb_programa (co_plano) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

--create unique index ux_tb_programa_plano_ds_sigla on dbesusgestor.tb_plano (ds_sigla);

create table dbesusgestor.tb_plano_hierarquia(
  co_plano int not null,
  co_plano_superior int not null
);

alter table dbesusgestor.tb_plano_hierarquia add CONSTRAINT tb_plano_meta_hierarquia_co_plano_fkey FOREIGN KEY (co_plano)
        REFERENCES dbesusgestor.tb_plano (co_plano) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

alter table dbesusgestor.tb_programa_hierarquia add CONSTRAINT tb_plano_hierarquia_co_plano_superior_fkey FOREIGN KEY (co_plano_superior)
        REFERENCES dbesusgestor.tb_plano (co_plano) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

CREATE TABLE dbesusgestor.tb_meta
(
  co_meta serial NOT NULL,
  co_programa int NOT NULL,
  ds_sigla varchar(10) not null,
  ds_meta character varying(50) not null,
  ds_justificativa text,
  co_periodicidade_monitoramento int not null,
  co_unidade_monitoramento integer not null,  --- TODO: Unidade que monitora
  CONSTRAINT tb_meta_pkey PRIMARY KEY (co_meta)
);

COMMENT ON TABLE dbesusgestor.tb_meta IS 'Armazena as metas';
COMMENT ON COLUMN dbesusgestor.tb_meta.co_meta IS 'Código interno da meta  - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_meta.co_programa IS 'FK para o programa';
COMMENT ON COLUMN dbesusgestor.tb_meta.ds_sigla IS 'Descrição da meta';
COMMENT ON COLUMN dbesusgestor.tb_meta.ds_justificativa IS 'Justificativa da meta';

alter table dbesusgestor.tb_meta add CONSTRAINT tb_meta_programa_fkey FOREIGN KEY (co_programa)
        REFERENCES dbesusgestor.tb_programa (co_programa) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

alter table dbesusgestor.tb_meta add CONSTRAINT fk_periodicidade_meta FOREIGN KEY (co_periodicidade)
        REFERENCES dbesusgestor.tb_programa (co_periodicidade) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

CREATE TABLE dbesusgestor.tb_monitoramento
(
  co_monitoramento serial NOT NULL,
  co_meta int NOT NULL,
  ds_justificativa text,
  CONSTRAINT tb_monitoramento_pkey PRIMARY KEY (co_monitoramento)
);

alter table dbesusgestor.tb_monitoramento add CONSTRAINT tb_monitoramento_meta_fkey  FOREIGN KEY (co_meta)
        REFERENCES dbesusgestor.tb_meta (co_meta) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

-- tb_meta_valor

------------------------------------------------
