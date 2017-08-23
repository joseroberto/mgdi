CREATE TABLE dbesusgestor.tb_programa_meta
(
  co_programa serial NOT NULL,
  ds_sigla varchar(10) not null,
  ds_programa character varying(50) not null,
  ds_detalhamento text,
  co_programa_pai integer,
  nu_nivel integer,
  CONSTRAINT tb_programa_meta_pkey PRIMARY KEY (co_programa)
);

COMMENT ON TABLE dbesusgestor.tb_programa_meta IS 'Armazena os programas e metas';
COMMENT ON COLUMN dbesusgestor.tb_programa_meta.ds_sigla IS 'Sigla do item do programa';
COMMENT ON COLUMN dbesusgestor.tb_programa_meta.ds_programa IS 'Descrição do item de programa';
COMMENT ON COLUMN dbesusgestor.tb_programa_meta.ds_detalhamento IS 'Nome da unidade de trabalho';
COMMENT ON COLUMN dbesusgestor.tb_programa_meta.co_programa_pai IS 'Referência ao programa pai';
COMMENT ON COLUMN dbesusgestor.tb_programa_meta.nu_nivel IS 'Nivel na hierarquia';


alter table dbesusgestor.tb_programa_meta add CONSTRAINT tb_programa_meta_co_programa_pai_fkey FOREIGN KEY (co_programa_pai)
        REFERENCES dbesusgestor.tb_programa_meta (co_programa) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

create unique index ux_tb_programa_meta_ds_sigla on dbesusgestor.tb_programa_meta (ds_sigla);

create table dbesusgestor.tb_programa_meta_hierarquia(
  co_programa int not null,
  co_programa_superior int not null
);

alter table dbesusgestor.tb_programa_meta_hierarquia add CONSTRAINT tb_programa_meta_hierarquia_co_programa_fkey FOREIGN KEY (co_programa)
        REFERENCES dbesusgestor.tb_programa_meta (co_programa) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

alter table dbesusgestor.tb_programa_meta_hierarquia add CONSTRAINT tb_programa_meta_hierarquia_co_programa_superior_fkey FOREIGN KEY (co_programa_superior)
        REFERENCES dbesusgestor.tb_programa_meta (co_programa) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;
---------------------------------
alter table dbesusgestor.tb_indicador alter COLUMN co_indicador type varchar(10);

---------------------------------
alter table dbesusgestor.tb_resultado add CONSTRAINT tb_resultado_co_uf_fkey FOREIGN KEY (co_uf)
        REFERENCES dbesusgestor.tb_uf (co_uf);

---------------------------------

create table dbesusgestor.tb_categoria_analise_item(
  co_seq_categoria_analise_item serial not null,
  co_categoria_analise varchar(8) not null,
  ds_titulo varchar(255) not null,
  CONSTRAINT tb_categoria_analise_item_pkey PRIMARY KEY (co_seq_categoria_analise_item)
);

COMMENT ON TABLE dbesusgestor.tb_categoria_analise_item IS 'Armazena os itens da categoria de analise';
COMMENT ON COLUMN dbesusgestor.tb_categoria_analise_item.co_seq_categoria_analise_item IS 'Sequencial chave para o item da categoria de analise';
COMMENT ON COLUMN dbesusgestor.tb_categoria_analise_item.co_categoria_analise IS 'Referência para categoria de analise';
COMMENT ON COLUMN dbesusgestor.tb_categoria_analise_item.ds_titulo IS 'Titulo do item';

alter table dbesusgestor.tb_categoria_analise_item add CONSTRAINT tb_categoria_analise_item_co_seq_categoria_analise_item_fkey FOREIGN KEY (co_categoria_analise)
  REFERENCES dbesusgestor.tb_categoria_analise (co_categoria_analise);

---------------------------------
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('FE1', '15 a 24 anos');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('FE1', '25 a 59 anos');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('FE1', '60 anos ou mais de idade');

insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('SD', 'urbana');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('SD', 'rural');

insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('COR', 'branca');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('COR', 'preta');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('COR', 'amarela');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('COR', 'parda');
insert into dbesusgestor.tb_categoria_analise_item (co_categoria_analise, ds_titulo) values ('COR', 'indígena');

---------------------------------
delete from dbesusgestor.tb_categoria_analise where co_categoria_analise='UG';
