-- DROP TABLE dbesusgestor.tb_secretaria;

-- Cria nova tabela de secretarias

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

-- Popula tabela de secretarias

insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SAS', 'Secretaria de Atenção à Saúde');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SGTES', 'Secretaria de Gestão do Trabalho e da Educação na Saúde');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SVS', 'Secretaria de Vigilância em Saúde');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SGEP', 'Secretaria de Gestão Estratégica e Participativa');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SESAI', 'Secretaria Especial da Saúde Indígena');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SE', 'Secretaria Executiva');
insert into dbesusgestor.tb_secretaria (sg_secretaria, ds_secretaria) values ('SCTIE', 'Secretaria Ciência, Tecnologia e Insumos Estratégicos');

-- Retira area responsavel

alter table dbesusgestor.tb_indicador drop column co_area_responsavel;

-- Relaciona secretaria com a tabela Indicador

alter table dbesusgestor.tb_indicador add column co_secretaria integer;
update dbesusgestor.tb_indicador set co_secretaria=1;
alter table dbesusgestor.tb_indicador add CONSTRAINT tb_indicador_co_secretaria_fkey FOREIGN KEY (co_secretaria)
      REFERENCES dbesusgestor.tb_secretaria (co_secretaria) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION;
alter table dbesusgestor.tb_indicador alter column co_secretaria set not null;
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_secretaria IS 'Código da secretaria responsável pelo indicador';


-- Cria nova coluna ds_descricao na tabela de Indicador

alter table dbesusgestor.tb_indicador add column ds_descricao varchar(255);
COMMENT ON COLUMN dbesusgestor.tb_indicador.ds_descricao IS 'Descrição do Indicador';
update dbesusgestor.tb_indicador set ds_descricao=ds_titulo;
alter table dbesusgestor.tb_indicador alter column ds_descricao set not null;

-- Cria novos campos de indicador acumulativo, ativo e Privado

alter table dbesusgestor.tb_indicador add column st_acumulativo boolean not null default 'f';
alter table dbesusgestor.tb_indicador add column st_ativo boolean not null default 't';

alter table dbesusgestor.tb_indicador alter column st_privado set default 't';
update dbesusgestor.tb_indicador set st_privado='t';
alter table dbesusgestor.tb_indicador alter column st_privado set not null;

COMMENT ON COLUMN dbesusgestor.tb_indicador.st_privado IS 'Marca privacidade do indicador não ser divulgado publicamente';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_ativo IS 'Marca o identificador estar ativo';
COMMENT ON COLUMN dbesusgestor.tb_indicador.st_acumulativo IS 'Marca o cálculo do indicador ser acumulativo no ano';


-- Cria indicador relacionado

CREATE TABLE dbesusgestor.tb_indicador_relacionado
(
  co_indicador_relacionado serial NOT NULL,
  co_indicador character varying(8) not null,
  co_indicador_pai character varying(8) not null,
  CONSTRAINT tb_indicador_relacionado_pkey PRIMARY KEY (co_indicador_relacionado),
  CONSTRAINT tb_indicador_relacionado_co_indicador_fkey FOREIGN KEY (co_indicador)
      REFERENCES dbesusgestor.tb_indicador (co_indicador),
  CONSTRAINT tb_indicador_relacionado_co_indicador_pai_fkey FOREIGN KEY (co_indicador_pai)
          REFERENCES dbesusgestor.tb_indicador (co_indicador)
);

COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador_relacionado IS 'Identificador da relação';
COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador IS 'Indicador de origem';
COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.co_indicador_pai IS 'Colecao de indicadores relacionados';

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


insert into dbesusgestor.tb_categoria_analise(co_categoria_analise,ds_titulo,ds_referencia) values ('UG','Unidade geográfica: Brasil, grandes regiões, estados, Distrito Federal e regiões metropolitanas. Municípios das capitais, em anos censitários', '');
insert into dbesusgestor.tb_categoria_analise(co_categoria_analise,ds_titulo,ds_referencia) values ('FE1','Faixa etária: 15 a 24 anos, 25 a 59 anos e 60 anos ou mais de idade', '');
insert into dbesusgestor.tb_categoria_analise(co_categoria_analise,ds_titulo,ds_referencia) values ('SD','Situação do domicílio: urbana e rural', '');
insert into dbesusgestor.tb_categoria_analise(co_categoria_analise,ds_titulo,ds_referencia) values ('COR','Cor ou raça, conforme a classificação do IBGE: branca, preta, amarela, parda e indígena', '');


-- Cria relacionamento indicador categoria de analise

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

insert into dbesusgestor.tb_tag_categoria (ds_tag_categoria) values ('Ações e Programas');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Academia da Saúde');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Saúde da Família');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Mais Médicos');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Melhor em Casa');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Pronto Atendimento');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'SAMU');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Controle do Câncer');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'Controle do Tabagismo');
insert into dbesusgestor.tb_tag (co_tag_categoria, ds_tag) values (1, 'HumanizaSUS');
