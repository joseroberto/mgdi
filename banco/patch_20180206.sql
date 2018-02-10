
-- Criacao de indices e constraints entre tb_resultado e categoria_item
alter table dbesusgestor.tb_resultado add column co_seq_categoria_analise_item integer;
create index ix_tb_resultado_co_seq_categoria_analise_item on dbesusgestor.tb_resultado(co_seq_categoria_analise_item);
alter table dbesusgestor.tb_resultado add constraint fk_tb_resultado_co_seq_categoria_analise_item FOREIGN KEY (co_seq_categoria_analise_item) REFERENCES dbesusgestor.tb_categoria_analise_item(co_seq_categoria_analise_item);


-- Mudanca no tipo das colunas de data da tb_resultado

alter table dbesusgestor.tb_resultado alter column co_anosemana type int USING co_anosemana::integer;

alter table dbesusgestor.tb_resultado  drop constraint tb_resultado_co_data_fkey;

alter table dbesusgestor.tb_resultado alter column co_anomesdia type int USING co_anomesdia::integer;

alter table dbesusgestor.tb_tempo alter column co_anomesdia type int using co_anomesdia::integer;

alter table dbesusgestor.tb_resultado  drop constraint  tb_resultado_co_data_fkey
FOREIGN KEY (co_anomesdia) REFERENCES dbesusgestor.tb_tempo(co_anomesdia);

alter table dbesusgestor.tb_resultado alter column co_anomes type int USING co_anomes::integer;
alter table dbesusgestor.tb_resultado alter column co_ano type int USING co_ano::integer;

-- criacao da tabela de aplicacao para dar suporte aos perfis

create table dbesusgestor.tb_aplicacao (
  co_aplicacao serial not null,
  ds_aplicacao varchar(50) not null,
  CONSTRAINT tb_aplicacao_pkey PRIMARY KEY (co_aplicacao)
);

COMMENT ON TABLE dbesusgestor.tb_aplicacao IS 'Armazena as aplicacoes passiveis de utilizarem o perfil';
COMMENT ON COLUMN dbesusgestor.tb_aplicacao.co_aplicacao IS 'Código da aplicação';
COMMENT ON COLUMN dbesusgestor.tb_aplicacao.ds_aplicacao IS 'Descrição da aplicação';

insert into dbesusgestor.tb_aplicacao (ds_aplicacao) values ('MGI');

alter table dbesusgestor.tb_perfil add column co_aplicacao int;
update dbesusgestor.tb_perfil set co_aplicacao=1;
alter table dbesusgestor.tb_perfil alter column co_aplicacao set not null;

alter table dbesusgestor.tb_perfil add constraint fk_tb_perfil_co_aplicacao FOREIGN KEY (co_aplicacao) REFERENCES dbesusgestor.tb_aplicacao(co_aplicacao);
