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


CREATE TABLE dbesusgestor.tb_secretaria
(
  co_secretaria serial NOT NULL,
  ds_secretaria character varying(255) not null,
  sg_secretaria character varying(50) not null,
  CONSTRAINT tb_secretaria_pkey PRIMARY KEY (co_secretaria)
);
COMMENT ON COLUMN dbesusgestor.tb_secretaria.co_secretaria IS 'Código Identificador da secretaria responsável pelas informações do indicador';
COMMENT ON COLUMN dbesusgestor.tb_secretaria.ds_secretaria IS 'Descrição da secretaria responsável pelas informações do indicador';
COMMENT ON COLUMN dbesusgestor.tb_secretaria.sg_secretaria IS 'Sigla da secretaria responsável pelas informações do indicador';

-- Table: dbesusgestor.tb_indicador

--- Cria categori de análise

CREATE TABLE dbesusgestor.tb_categoria_analise
(
  co_categoria_analise varchar(8) NOT NULL,
  ds_titulo varchar(255) not null,
  ds_referencia text not null,
  CONSTRAINT tb_categoria_analise_pkey PRIMARY KEY (co_categoria_analise)
);

COMMENT ON COLUMN dbesusgestor.tb_categoria_analise.co_categoria_analise IS 'Sigla da categoria de análise';
COMMENT ON COLUMN dbesusgestor.tb_categoria_analise.ds_titulo IS 'Título da categoria';
COMMENT ON COLUMN dbesusgestor.tb_categoria_analise.ds_referencia IS 'Referencia da categoria. Dados no formato json para descrever categoria de análise';


-- DROP TABLE dbesusgestor.tb_indicador;

CREATE TABLE dbesusgestor.tb_indicador
(
  co_indicador character varying(8) not null,
  ds_titulo character varying(200) not null,
  ds_descricao character varying(255) not null,
  co_periodicidade integer not null,
  co_unidade_medida integer not null,
  ds_metodo_calculo text,
  ds_conceituacao text,
  ds_interpretacao text,
  ds_uso text,
  ds_limitacao text,
  ds_nota text,
  ds_observacao text,
  ds_fonte_dados text,
  ds_objetivo character varying(2000),
  co_indicador_classificacao integer,
  st_privado boolean,
  st_acumulativo boolean,
  st_ativo boolean,
  dt_inclusao timestamp without time zone,
  dt_atualizacao timestamp without time zone,
  co_secretaria integer not null, -- Código identificador da área responsável
  CONSTRAINT pk_indicador PRIMARY KEY (co_indicador),
  CONSTRAINT fk_periodicidade_indicador FOREIGN KEY (co_periodicidade)
      REFERENCES dbesusgestor.tb_periodicidade (co_periodicidade) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_secretaria_fkey FOREIGN KEY (co_secretaria)
            REFERENCES dbesusgestor.tb_secretaria (co_secretaria) MATCH SIMPLE
            ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_indicador_classificacao_fkey FOREIGN KEY (co_indicador_classificacao)
      REFERENCES dbesusgestor.tb_indicador_classificacao (co_indicador_classificacao) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT tb_indicador_co_unidade_medida_fkey FOREIGN KEY (co_unidade_medida)
      REFERENCES dbesusgestor.tb_unidade_medida (co_unidade_medida) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_descricao IS 'Descrição do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_titulo IS 'Título do Indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_indicador IS 'Código do Indicador';
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
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_privado IS 'Marca privacidade do indicador não ser divulgado publicamente';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_ativo IS 'Marca o identificador estar ativo';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_acumulativo IS 'Marca o cálculo do indicador ser acumulativo no ano';
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_secretaria IS 'Código da secretaria responsável pelo indicador';


-- Index: dbesusgestor.ix_co_indicador

-- DROP INDEX dbesusgestor.ix_co_indicador;

-- Index: dbesusgestor.ux_co_indicador

-- DROP INDEX dbesusgestor.ux_co_indicador;

CREATE INDEX ux_co_indicador
  ON dbesusgestor.tb_indicador
  USING btree
  (co_indicador COLLATE pg_catalog."default");


  CREATE TABLE dbesusgestor.tb_indicador_relacionado
  (
    co_indicador_relacionado serial NOT NULL,
    co_indicador character varying(8) not null,
    co_indicador_pai character varying(8) not null,
    dt_inclusao timestamp without time zone,
    dt_atualizacao timestamp without time zone,
    CONSTRAINT tb_indicador_relacionado_pkey PRIMARY KEY (co_indicador_relacionado),
    CONSTRAINT tb_indicador_relacionado_co_indicador_fkey FOREIGN KEY (co_indicador)
        REFERENCES dbesusgestor.tb_indicador (co_indicador),
    CONSTRAINT tb_indicador_relacionado_co_indicador_pai_fkey FOREIGN KEY (co_indicador_pai)
            REFERENCES dbesusgestor.tb_indicador (co_indicador)
  );

  COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador_relacionado IS 'Identificador da relação';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador IS 'Indicador de origem';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador_pai IS 'Colecao de indicadores relacionados';

  CREATE TABLE dbesusgestor.tb_indicador_categoria_analise
  (
    co_indicador_categoria_analise serial not null,
    co_indicador varchar(8) NOT NULL,
    co_categoria_analise varchar(8) NOT NULL,
    CONSTRAINT tb_indicador_categoria_analise_pkey PRIMARY KEY (co_categoria_analise),
    CONSTRAINT tb_indicador_categoria_analise_co_indicador_fkey FOREIGN KEY (co_indicador)
        REFERENCES dbesusgestor.tb_indicador (co_indicador),
    CONSTRAINT tb_indicador_categoria_analise_co_categoria_analise_fkey FOREIGN KEY (co_categoria_analise)
            REFERENCES dbesusgestor.tb_categoria_analise (co_categoria_analise)
  );

  COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.co_indicador_categoria_analise IS 'Chave da relação indicador e categoria de análise';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.co_indicador IS 'Indicador relacionado';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.co_categoria_analise IS 'Catgoria de análise relacionada';

  -- Cria tags e categoria de tags

  -- DROP TABLE dbesusgestor.tb_tag_categoria;

  CREATE TABLE dbesusgestor.tb_tag_categoria
  (
    co_tag_categoria serial not null,
    ds_tag_categoria varchar(255) NOT NULL,
    CONSTRAINT tb_tag_categoria_pkey PRIMARY KEY (co_tag_categoria)
  );

  COMMENT ON TABLE dbesusgestor.tb_tag_categoria IS 'Categoria da tag';
  COMMENT ON COLUMN dbesusgestor.tb_tag_categoria.co_tag_categoria IS 'Código da categoria da tag (autogerado)';
  COMMENT ON COLUMN dbesusgestor.tb_tag_categoria.ds_tag_categoria IS 'Descrição da categoria da tag';


  -- DROP TABLE dbesusgestor.tb_tag;

  CREATE TABLE dbesusgestor.tb_tag
  (
    co_tag serial not null,
    co_tag_categoria integer not null,
    ds_tag varchar(255) NOT NULL,
    CONSTRAINT tb_tag_pkey PRIMARY KEY (co_tag),
    CONSTRAINT tb_tag_co_tag_categoria_fkey FOREIGN KEY (co_tag_categoria)
        REFERENCES dbesusgestor.tb_tag_categoria (co_tag_categoria)
  );
  COMMENT ON TABLE dbesusgestor.tb_tag IS 'Tag a serem atribuídas aos indicadores';
  COMMENT ON COLUMN dbesusgestor.tb_tag.co_tag IS 'Código da tag (autogerado)';
  COMMENT ON COLUMN dbesusgestor.tb_tag.co_tag IS 'Descrição da tag';
  COMMENT ON COLUMN dbesusgestor.tb_tag.co_tag_categoria IS 'Categoria relacionada';


  -- DROP TABLE dbesusgestor.tb_indicador_tag;

  CREATE TABLE dbesusgestor.tb_indicador_tag
  (
    co_indicador_tag serial not null,
    co_tag integer not null,
    co_indicador varchar(8) NOT NULL,
    CONSTRAINT tb_indicador_tag_pkey PRIMARY KEY (co_indicador_tag),
    CONSTRAINT tb_indicador_tag_co_indicador_fkey FOREIGN KEY (co_indicador)
        REFERENCES dbesusgestor.tb_indicador (co_indicador),
    CONSTRAINT tb_indicador_tag_co_tag_fkey FOREIGN KEY (co_tag)
            REFERENCES dbesusgestor.tb_tag (co_tag)
  );

  COMMENT ON TABLE dbesusgestor.tb_indicador_tag IS 'Relacão entre indicador e tags';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_tag.co_indicador_tag IS 'Código da relação indicador tag (autogerado)';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_tag.co_tag IS 'Tag relacionada';
  COMMENT ON COLUMN dbesusgestor.tb_indicador_tag.co_indicador IS 'Indicador relacionado';
