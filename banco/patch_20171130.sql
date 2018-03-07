update dbesusgestor.tb_tipo_consulta set ds_tipo_consulta='Formulário' where co_tipo_consulta=4;
insert into dbesusgestor.tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) values (5, 'ETL');

alter table dbesusgestor.tb_user_mgi add column ds_cargo varchar(100);

alter table dbesusgestor.tb_resultado add column co_anosemana char(6);



----------------------------------------
-- Estrutura para carga
CREATE TABLE dbesusgestor.tb_tipo_arquivo(
  co_tipo_arquivo int NOT NULL,
  ds_tipo_arquivo varchar(100) NOT NULL,
  ds_mime_type varchar(150) NOT NULL,
  CONSTRAINT tb_tipo_arquivo_pkey PRIMARY KEY (co_tipo_arquivo)
);

COMMENT ON TABLE dbesusgestor.tb_tipo_arquivo IS 'Armazena os tipos de arquivo possiveis a serem carregados';
COMMENT ON COLUMN dbesusgestor.tb_tipo_arquivo.co_tipo_arquivo IS 'Código interno do tipo de arquivo - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_tipo_arquivo.ds_tipo_arquivo IS 'Descrição do tipo de arquivo';
COMMENT ON COLUMN dbesusgestor.tb_tipo_arquivo.ds_mime_type IS 'Mime Type para o tipo de arquivo - user os possíveis e padrão utilizado pelo sistema operacional';


CREATE TABLE dbesusgestor.tb_situacao_carga(
  co_situacao_carga int NOT NULL,
  ds_situacao_carga varchar(100) NOT NULL,
  CONSTRAINT tb_situacao_carga_pkey PRIMARY KEY (co_situacao_carga)
);

COMMENT ON TABLE dbesusgestor.tb_situacao_carga IS 'Armazena os tipos de situação da carga de indicadores';
COMMENT ON COLUMN dbesusgestor.tb_situacao_carga.co_situacao_carga IS 'Código interno da situação de carga';
COMMENT ON COLUMN dbesusgestor.tb_situacao_carga.ds_situacao_carga IS 'Descrição da situação de carga';

CREATE TABLE dbesusgestor.tb_carga(
  co_carga serial NOT NULL,
  co_seq_indicador int NOT NULL,
  co_tipo_arquivo int NOT NULL,
  co_situacao_carga int NOT NULL,
  by_file bytea,
  co_responsavel int not null,
  dt_inclusao timestamp without time zone not null,
  dt_atualizacao timestamp without time zone,
  CONSTRAINT tb_carga_pkey PRIMARY KEY (co_carga)
);

COMMENT ON TABLE dbesusgestor.tb_carga IS 'Armazena as tentativas e consequentes cargas de dados de indicadores feitas pelo usuario';
COMMENT ON COLUMN dbesusgestor.tb_carga.co_carga IS 'Código interno da carga - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_carga.co_seq_indicador IS 'Código interno do indicador';
COMMENT ON COLUMN dbesusgestor.tb_carga.co_tipo_arquivo IS 'Código interno do tipo de arquivo';
COMMENT ON COLUMN dbesusgestor.tb_carga.co_carga IS 'Código interno da situação da carga';
COMMENT ON COLUMN dbesusgestor.tb_carga.by_file IS 'Arquivo a ser carrgado';
COMMENT ON COLUMN dbesusgestor.tb_carga.co_responsavel IS 'Código interno do usuário responsável pela carga';
COMMENT ON COLUMN dbesusgestor.tb_carga.dt_inclusao IS 'Data de inclusão';
COMMENT ON COLUMN dbesusgestor.tb_carga.dt_atualizacao IS 'Data de atualização';


alter table dbesusgestor.tb_carga add constraint tb_carga_co_seq_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_carga add constraint tb_carga_co_tipo_arquivo_fkey FOREIGN KEY (co_tipo_arquivo) REFERENCES dbesusgestor.tb_tipo_arquivo(co_tipo_arquivo);
alter table dbesusgestor.tb_carga add constraint tb_carga_co_situacao_carga_fkey FOREIGN KEY (co_situacao_carga) REFERENCES dbesusgestor.tb_situacao_carga(co_situacao_carga);
alter table dbesusgestor.tb_carga add constraint tb_carga_co_responsavel_fkey FOREIGN KEY (co_responsavel) REFERENCES dbesusgestor.tb_user_mgi(co_user);

CREATE TABLE dbesusgestor.tb_carga_item(
  co_carga_item serial NOT NULL,
  co_seq_indicador int NOT NULL,
  co_ibge int,
  co_cnes int,
  co_anomesdia char(8),
  co_anomes char(6),
  co_anosemana char(6),
  co_ano char(4),
  co_uf integer,
  dt_inclusao timestamp without time zone not null,
  dt_atualizacao timestamp without time zone,
  CONSTRAINT tb_carga_item_pkey PRIMARY KEY (co_carga_item)
);

COMMENT ON TABLE dbesusgestor.tb_carga_item IS 'Armazena os itens importados do arquivo de carga e disponíveis para replicar na tabela de resultados';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_carga_item IS 'Código interno do item de carga - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_seq_indicador IS 'Codigo do indicador a ser referenciado';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_ibge IS 'Código do IBGE para o caso de um dado com granularidade municipal';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_cnes IS 'Código do CNES para o caso de um dado com granularidade de instituição de saúde';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_anomesdia IS 'Valor do anomesdia para valores diariamente referenciados';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_anomes IS 'Valor do anomes para valores mensalmente referenciados';

COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_anosemana IS 'Valor do anosemana para valores semanalmente referenciados';

COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_ano IS 'Valor do ano para valores anualmente referenciados';

COMMENT ON COLUMN dbesusgestor.tb_carga_item.co_uf IS 'Código da Unidade Federativa';

COMMENT ON COLUMN dbesusgestor.tb_carga_item.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_carga_item.dt_atualizacao IS 'Data de alteração do registro';

alter table dbesusgestor.tb_carga_item add constraint tb_carga_item_co_data_fkey FOREIGN KEY (co_anomesdia) REFERENCES dbesusgestor.tb_tempo(co_anomesdia);
alter table dbesusgestor.tb_carga_item add constraint tb_carga_item_co_ibge_fkey FOREIGN KEY (co_ibge) REFERENCES dbesusgestor.tb_municipio(co_ibge);
alter table dbesusgestor.tb_carga_item add constraint tb_carga_item_co_seq_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_carga_item add constraint tb_carga_itemo_co_uf_fkey FOREIGN KEY (co_uf) REFERENCES dbesusgestor.tb_uf(co_uf);

insert into dbesusgestor.tb_situacao_carga (co_situacao_carga, ds_situacao_carga) values (1, 'Em configuração');
insert into dbesusgestor.tb_situacao_carga (co_situacao_carga, ds_situacao_carga) values (2, 'Carregando');
insert into dbesusgestor.tb_situacao_carga (co_situacao_carga, ds_situacao_carga) values (3, 'Carregado');
insert into dbesusgestor.tb_situacao_carga (co_situacao_carga, ds_situacao_carga) values (4, 'Erro de carga');

insert into dbesusgestor.tb_tipo_arquivo (co_tipo_arquivo, ds_tipo_arquivo, ds_mime_type) values (1, 'Planilha', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
insert into dbesusgestor.tb_tipo_arquivo (co_tipo_arquivo, ds_tipo_arquivo, ds_mime_type) values (2, 'Arquivo CSV', 'text/csv');
insert into dbesusgestor.tb_tipo_arquivo (co_tipo_arquivo, ds_tipo_arquivo, ds_mime_type) values (3, 'Formulário', '');

----------------------------------------
-----  Estrutura para os programs
