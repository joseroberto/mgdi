CREATE SCHEMA dbesusgestor;

CREATE TABLE dbesusgestor.tb_unidade_medida
(
  co_unidade_medida integer NOT NULL,
  ds_unidade_medida character varying(300) not null,
  CONSTRAINT tb_unidade_medida_pkey PRIMARY KEY (co_unidade_medida)
);
COMMENT ON COLUMN dbesusgestor.tb_unidade_medida.co_unidade_medida IS 'Código unidade de medida';
COMMENT ON COLUMN dbesusgestor.tb_unidade_medida.ds_unidade_medida IS 'Descrição da unidade de medida';


CREATE TABLE dbesusgestor.tb_indicador_classificacao
(
  co_indicador_classificacao integer NOT NULL, -- Código Identificador da Classificação do Indicador
  ds_indicador_classificacao character varying(255) not null, -- Descrição da Classificação do Indicador
  CONSTRAINT tb_indicador_classificacao_pkey PRIMARY KEY (co_indicador_classificacao)
);
COMMENT ON COLUMN dbesusgestor.tb_indicador_classificacao.co_indicador_classificacao IS 'Código da Classificação do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_classificacao.ds_indicador_classificacao IS 'Descrição da Classificação do Indicador';


CREATE TABLE dbesusgestor.tb_area_responsavel
(
  co_area_responsavel integer NOT NULL, -- Código Identificador da Área Responsável pelo informações do Indicador
  ds_area_responsavel character varying(255) not null, -- Descrição da Área Responsável pelo informações do Indicador
  sg_area_responsavel character varying(255) not null, -- Sigla da Área Responsável pelo informações do Indicador
  CONSTRAINT tb_area_responsavel_pkey PRIMARY KEY (co_area_responsavel)
);
COMMENT ON COLUMN dbesusgestor.tb_area_responsavel.co_area_responsavel IS 'Código Identificador da Área Responsável pelo informações do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_area_responsavel.ds_area_responsavel IS 'Descrição da Área Responsável pelo informações do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_area_responsavel.sg_area_responsavel IS 'Sigla da Área Responsável pelo informações do Indicador';


CREATE TABLE dbesusgestor.tb_periodicidade
(
  co_periodicidade integer NOT NULL,
  ds_periodicidade character varying(300) not null,
  CONSTRAINT tb_periodicidade_pkey PRIMARY KEY (co_periodicidade)
);
COMMENT ON COLUMN dbesusgestor.tb_periodicidade.co_periodicidade IS 'Código da periodicidade';
COMMENT ON COLUMN dbesusgestor.tb_periodicidade.ds_periodicidade IS 'Descrição da periodicidade';



-- Table: dbesusgestor.tb_indicador

-- DROP TABLE dbesusgestor.tb_indicador;

CREATE TABLE dbesusgestor.tb_indicador
(
  co_indicador character varying(8) not null, -- Código do Indicador
  ds_titulo character varying(200) not null, -- Titulo do Indicador
  co_periodicidade integer not null, -- Código da Periodicidade do Indicador
  co_unidade_medida integer not null, -- Código identificador da Unidade de Medida do Indicador
  ds_metodo_calculo text, -- Descrição do Método de Cálculo
  ds_conceituacao text, -- Descrição da Conceituação
  ds_interpretacao text, -- Descrição da Interpretação
  ds_uso text, -- Descrição do Uso do Indicador
  ds_limitacao text, -- Descrição da Limitação do Indicador
  ds_nota text, -- Notas sobre o Indicador
  ds_observacao text, -- Observacoes sobre o Indicador
  ds_fonte_dados text, -- Fonte de dados do indicador
  ds_objetivo character varying(2000), -- Objetivo do Indicador
  co_indicador_classificacao integer, -- Código de classificação do Indicador
  st_privado boolean, -- Status identificador do Indicador Público
  co_area_responsavel integer, -- Código identificador da área responsável
  CONSTRAINT pk_indicador PRIMARY KEY (co_indicador),
  CONSTRAINT fk_periodicidade_indicador FOREIGN KEY (co_periodicidade)
      REFERENCES dbesusgestor.tb_periodicidade (co_periodicidade) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_area_responsavel_fkey FOREIGN KEY (co_area_responsavel)
      REFERENCES dbesusgestor.tb_area_responsavel (co_area_responsavel) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_indicador_classificacao_fkey FOREIGN KEY (co_indicador_classificacao)
      REFERENCES dbesusgestor.tb_indicador_classificacao (co_indicador_classificacao) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_unidade_medida_fkey FOREIGN KEY (co_unidade_medida)
      REFERENCES dbesusgestor.tb_unidade_medida (co_unidade_medida) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_titulo IS 'Título do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_indicador IS 'Código do Indicador TODO: Trocar para co_indicador_principal->co_indicador e a coluna co_indicador->ds_mnemonico';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_periodicidade IS 'Código da Periodicidade do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_unidade_medida IS 'Código identificador da Unidade de Medida do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_metodo_calculo IS 'Descrição do Método de Cálculo';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_conceituacao IS 'Descrição da Conceituação';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_interpretacao IS 'Descrição da Interpretação';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_uso IS 'Descrição do Uso do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_nota IS 'Notas sobre o Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_observacao IS 'Observações sobre o Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_limitacao IS 'Descrição da Limitação do Indicador';

COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_fonte_dados IS 'Fonte de dados do indicador';

COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_objetivo IS 'Objetivo do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_indicador_classificacao IS 'Código de classificação do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_privado IS 'Status identificador do Indicador Privado';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_area_responsavel IS 'Código identificador da área responsável';


-- Index: dbesusgestor.ix_co_indicador

-- DROP INDEX dbesusgestor.ix_co_indicador;

-- Index: dbesusgestor.ux_co_indicador

-- DROP INDEX dbesusgestor.ux_co_indicador;

CREATE INDEX ux_co_indicador
  ON dbesusgestor.tb_indicador
  USING btree
  (co_indicador COLLATE pg_catalog."default");
