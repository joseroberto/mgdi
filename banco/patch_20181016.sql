create table dbesusgestor.tb_indicador_classificacao6s(
    co_indicador_classificacao int not null,
    ds_indicador_classificacao varchar(255) not null,
    CONSTRAINT tb_indicador_classificacao6s_pkey PRIMARY KEY (co_indicador_classificacao)
);
COMMENT ON TABLE dbesusgestor.tb_indicador_classificacao6s IS 'Armazena as classificações 6S dos indicadores';
COMMENT ON COLUMN dbesusgestor.tb_indicador_classificacao6s.co_indicador_classificacao IS 'Surrogate key da classificacao';
COMMENT ON COLUMN dbesusgestor.tb_indicador_classificacao6s.ds_indicador_classificacao IS 'Descrição da classificação';


insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (0, 'Sem classificação');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (1, 'Efetividade');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (2, 'Eficácia');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (3, 'Eficiência');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (4, 'Execução');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (5, 'Excelência');
insert into dbesusgestor.tb_indicador_classificacao6s (co_indicador_classificacao, ds_indicador_classificacao) values (6, 'Economicidade');


create table dbesusgestor.tb_indicador_fonte(
    co_fonte serial not null,
    ds_sigla_fonte varchar(15) not null,
    ds_fonte varchar(255) not null,
    CONSTRAINT tb_indicador_fonte_pkey PRIMARY KEY (co_fonte)
);
COMMENT ON TABLE dbesusgestor.tb_indicador_fonte IS 'Armazena as fontes possíveis para os indicadores';
COMMENT ON COLUMN dbesusgestor.tb_indicador_fonte.co_fonte IS 'Surrogate key da fonte do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_fonte.ds_sigla_fonte IS 'Sigla da fonte do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_fonte.ds_fonte IS 'Descrição da fonte do indicador';


insert into dbesusgestor.tb_indicador_fonte (ds_sigla_fonte, ds_fonte) values ('', 'Sem fonte');
insert into dbesusgestor.tb_indicador_fonte (ds_sigla_fonte, ds_fonte) values ('MS', 'Ministério da Saúde');


alter table dbesusgestor.tb_indicador rename column co_unidade_responsavel to co_unidade;
alter table dbesusgestor.tb_indicador add column co_indicador_classificacao6s int not null default 0;
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_indicador_classificacao6s IS 'Surrogate key da classificacao6s';

alter table dbesusgestor.tb_indicador add constraint fk_tb_indicador_co_indicador_classificacao6s foreign key (co_indicador_classificacao6s) references
dbesusgestor.tb_indicador_classificacao6s(co_indicador_classificacao);

alter table dbesusgestor.tb_indicador drop column co_secretaria;

alter table dbesusgestor.tb_indicador add column co_fonte int;
COMMENT ON COLUMN dbesusgestor.tb_indicador.co_fonte IS 'Surrogate key da fonte do parametro';

alter table dbesusgestor.tb_indicador add constraint fk_tb_indicador_co_fonte foreign key (co_fonte) references
dbesusgestor.tb_indicador_fonte(co_fonte);

alter table dbesusgestor.tb_indicador rename column nu_indice_referencia to nu_parametro_referencia;

create table dbesusgestor.tb_indicador_responsavel_tecnico(
  co_seq_indicador int not null,
  co_unidade int not null,
  constraint pk_tb_indicador_responsavel_tecnico primary key (co_seq_indicador, co_unidade)
);

COMMENT ON TABLE dbesusgestor.tb_indicador_responsavel_tecnico IS 'Tabela de armazenamento dos responsaveis tecnicos do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.co_seq_indicador IS 'Surrogate key do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.co_unidade IS 'Surrogate key da unidade';

alter table dbesusgestor.tb_indicador_responsavel_tecnico add constraint fk_tb_indicador_responsavel_tecnico_co_seq_indicador foreign key (co_seq_indicador) references
dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_indicador_responsavel_tecnico add constraint fk_tb_indicador_responsavel_tecnico_co_unidade foreign key (co_unidade) references
dbesusgestor.tb_unidade(co_unidade);



create table dbesusgestor.tb_indicador_responsavel_gerencial(
  co_seq_indicador int not null,
  co_unidade int not null,
  constraint pk_tb_indicador_responsavel_gerencial primary key (co_seq_indicador, co_unidade)
);

COMMENT ON TABLE dbesusgestor.tb_indicador_responsavel_gerencial IS 'Tabela de armazenamento dos responsaveis gerenciais do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.co_seq_indicador IS 'Surrogate key do indicador';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.co_unidade IS 'Surrogate key da unidade';

alter table dbesusgestor.tb_indicador_responsavel_gerencial add constraint fk_tb_indicador_responsavel_gerencial_co_seq_indicador foreign key (co_seq_indicador) references
dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_indicador_responsavel_gerencial add constraint fk_tb_indicador_responsavel_gerencial_co_unidade foreign key (co_unidade) references
dbesusgestor.tb_unidade(co_unidade);

alter table dbesusgestor.tb_indicador_responsavel_gerencial add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_responsavel_gerencial add column dt_atualizacao timestamp without time zone;
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_gerencial.dt_atualizacao IS 'Data de atualização do registro';

alter table dbesusgestor.tb_indicador_responsavel_tecnico add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_responsavel_tecnico add column dt_atualizacao timestamp without time zone;
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_responsavel_tecnico.dt_atualizacao IS 'Data de atualização do registro';
