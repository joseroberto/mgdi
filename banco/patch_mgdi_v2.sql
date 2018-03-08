begin;
insert into dbesusgestor.tb_indicador_classificacao (co_indicador_classificacao,ds_indicador_classificacao) values (0, 'Sem Classificação');

update dbesusgestor.tb_indicador set co_indicador_classificacao=0 where co_indicador_classificacao is null;

alter table dbesusgestor.tb_indicador alter column co_indicador_classificacao set not null;

alter table dbesusgestor.tb_indicador add constraint fk_tb_indicador_co_indicador_classificacao6s foreign key (co_indicador_classificacao6s) references
dbesusgestor.tb_indicador_classificacao6s(co_indicador_classificacao);

--alter table dbesusgestor.tb_indicador drop column co_secretaria;

alter table dbesusgestor.tb_indicador add column co_fonte int;
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_fonte IS 'Surrogate key da fonte do parametro';

alter table dbesusgestor.tb_indicador add column co_fonte int;
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_fonte IS 'Surrogate key da fonte do parametro';

alter table dbesusgestor.tb_indicador add constraint fk_tb_indicador_co_fonte foreign key (co_fonte) references
dbesusgestor.tb_indicador_fonte(co_fonte);

alter table dbesusgestor.tb_indicador rename column nu_indice_referencia to nu_parametro_referencia;

alter table dbesusgestor.tb_indicador_responsavel_gerencial add column dt_inclusao timestamp without time zone;

alter table dbesusgestor.tb_indicador_responsavel_gerencial add column dt_atualizacao timestamp without time zone;

COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.dt_inclusao IS 'Data de inclusão do registro';

COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.dt_atualizacao IS 'Data de atualização do registro';

alter table dbesusgestor.tb_indicador_responsavel_tecnico add column dt_inclusao timestamp without time zone;

alter table dbesusgestor.tb_indicador_responsavel_tecnico add column dt_atualizacao timestamp without time zone;

COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.dt_inclusao IS 'Data de inclusão do registro';

COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.dt_atualizacao IS 'Data de atualização do registro';

alter table dbesusgestor.tb_indicador_responsavel_gerencial drop constraint fk_tb_indicador_responsavel_gerencial_co_seq_indicador;
alter table dbesusgestor.tb_indicador_responsavel_gerencial  add constraint fk_tb_indicador_responsavel_gerencial_co_seq_indicador FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador) ON DELETE CASCADE;
alter table dbesusgestor.tb_indicador_responsavel_gerencial drop constraint fk_tb_indicador_responsavel_gerencial_co_unidade;
alter table dbesusgestor.tb_indicador_responsavel_gerencial  add constraint fk_tb_indicador_responsavel_gerencial_co_unidade FOREIGN KEY (co_unidade) REFERENCES dbesusgestor.tb_unidade(co_unidade) ON DELETE RESTRICT;

alter table dbesusgestor.tb_indicador_responsavel_tecnico drop constraint fk_tb_indicador_responsavel_tecnico_co_seq_indicador;
alter table dbesusgestor.tb_indicador_responsavel_tecnico add constraint fk_tb_indicador_responsavel_tecnico_co_seq_indicador FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador) ON DELETE CASCADE;
alter table dbesusgestor.tb_indicador_responsavel_tecnico drop constraint fk_tb_indicador_responsavel_tecnico_co_unidade;
alter table dbesusgestor.tb_indicador_responsavel_tecnico add constraint fk_tb_indicador_responsavel_tecnico_co_unidade FOREIGN KEY (co_unidade) REFERENCES dbesusgestor.tb_unidade(co_unidade) ON DELETE RESTRICT;

alter table dbesusgestor.tb_indicador_relacionado drop constraint tb_indicador_relacionado_co_indicador_fkey;
alter table dbesusgestor.tb_indicador_relacionado add constraint tb_indicador_relacionado_co_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador) ON DELETE CASCADE;
alter table dbesusgestor.tb_indicador_relacionado drop constraint tb_indicador_relacionado_co_indicador_pai_fkey;
alter table dbesusgestor.tb_indicador_relacionado add constraint tb_indicador_relacionado_co_indicador_pai_fkey FOREIGN KEY (co_seq_indicador_pai) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador) ON DELETE CASCADE;

alter table dbesusgestor.tb_indicador_tag drop constraint tb_indicador_tag_co_indicador_fkey;
alter table dbesusgestor.tb_indicador_tag add constraint tb_indicador_tag_co_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador) ON DELETE CASCADE;
alter table dbesusgestor.tb_indicador_tag drop constraint tb_indicador_tag_co_tag_fkey;
alter table dbesusgestor.tb_indicador_tag add constraint tb_indicador_tag_co_tag_fkey FOREIGN KEY (co_tag) REFERENCES dbesusgestor.tb_tag(co_tag) ON DELETE RESTRICT;

create index ix_tb_resultado_co_seq_categoria_analise_item on dbesusgestor.tb_resultado(co_seq_categoria_analise_item);

alter table dbesusgestor.tb_resultado add constraint fk_tb_resultado_co_seq_categoria_analise_item FOREIGN KEY (co_seq_categoria_analise_item) REFERENCES dbesusgestor.tb_categoria_analise_item(co_seq_categoria_analise_item);

alter table dbesusgestor.tb_resultado  drop constraint tb_resultado_co_data_fkey;

alter table dbesusgestor.tb_resultado alter column co_anosemana type int USING co_anosemana::integer;

alter table dbesusgestor.tb_resultado alter column co_anomesdia type int USING co_anomesdia::integer;

alter table dbesusgestor.tb_tempo alter column co_anomesdia type int using co_anomesdia::integer;

alter table dbesusgestor.tb_resultado alter column co_anomes type int USING co_anomes::integer;

alter table dbesusgestor.tb_resultado alter column co_ano type int USING co_ano::integer;

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


commit;