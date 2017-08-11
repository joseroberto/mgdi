-- DROP TABLE dbesusgestor.tb_tempo;

CREATE TABLE dbesusgestor.tb_tempo (
    co_anomesdia character(8) NOT NULL,
    dt_data date,
    dt_curta character varying(50),
    dt_media character varying(50),
    dt_comprida character varying(50),
    dt_completa character varying(50),
    nu_dia_ano integer,
    nu_dia integer,
    ds_dia character varying(20),
    ds_dia_abreviado character varying(10),
    nu_mes integer,
    ds_mes character varying(10),
    ds_mes_abreviado character varying(10),
    nu_ano integer,
    nu_semana_ano integer,
    nu_semana_mes integer,
    nu_trimestre integer,
    ds_trimestre character varying(10),
    st_primeiro_dia_semana boolean,
    st_ultimo_dia_semana boolean,
    st_primeiro_dia_mes boolean,
    st_ultimo_dia_mes boolean,
    nu_sequencia integer,
    st_final_semana boolean,
    st_feriado_nacional boolean,
    nu_semana_sequencia integer,
    ds_semana character varying(50),
    ds_mesano character varying(20),
    ds_diames character varying(8),
    CONSTRAINT tb_tempo_pkey PRIMARY KEY (co_anomesdia)
);

COMMENT ON TABLE dbesusgestor.tb_tempo IS 'Tabela para melhoria da performance na apresentacao de dados de tempo';

COMMENT ON COLUMN dbesusgestor.tb_tempo.co_anomesdia IS 'Codigo identificador da data (funciona como a surrogate key da tabela).';
COMMENT ON COLUMN dbesusgestor.tb_tempo.dt_data IS 'Data no formato Date.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.dt_curta IS 'Data curta.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.dt_media IS 'Abreviacao da Data Comprida.Ex. "Jan 14, 1900"';
COMMENT ON COLUMN dbesusgestor.tb_tempo.dt_comprida IS 'Data comprida.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.dt_completa IS 'Data completa.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_dia_ano IS 'Numero sequencial do dia no ano.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_semana_sequencia IS 'Numero sequencial da semana.';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_semana IS 'Descricao da semana';

COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_dia IS 'Dia do mês';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_dia IS 'Descricao do dia';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_dia_abreviado IS 'Descricao do dia abreviado';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_mes IS 'Numero do mes';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_mes IS 'Mes por extenso';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_mes_abreviado IS 'Mes por extenso e abreviado';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_ano IS 'Ano no formato numerico';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_semana_ano IS 'Ordem da semana no ano';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_semana_mes IS 'Ordem da semana no mes';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_trimestre IS 'Numero do trimestre';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_trimestre IS 'Descricao em texto do trimestre';
COMMENT ON COLUMN dbesusgestor.tb_tempo.st_primeiro_dia_semana IS 'Flag se e primeiro dia da semana';

COMMENT ON COLUMN dbesusgestor.tb_tempo.st_ultimo_dia_semana IS 'Flag se e ultimo dia da semana';
COMMENT ON COLUMN dbesusgestor.tb_tempo.st_primeiro_dia_mes IS 'Flag se e primeiro dia do mes';
COMMENT ON COLUMN dbesusgestor.tb_tempo.st_ultimo_dia_mes IS 'Flag se e ultimo dia do mes';
COMMENT ON COLUMN dbesusgestor.tb_tempo.nu_sequencia IS 'Sequencial (SK) para a tabela';

COMMENT ON COLUMN dbesusgestor.tb_tempo.st_final_semana IS 'Flag se e final de semana';
COMMENT ON COLUMN dbesusgestor.tb_tempo.st_feriado_nacional IS 'Flag se e feriado nacional';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_mesano IS 'Descricao para mes ano';
COMMENT ON COLUMN dbesusgestor.tb_tempo.ds_diames IS 'Descricao do dia e mes';

CREATE TABLE dbesusgestor.tb_resultado
(
  co_seq serial NOT NULL,
  co_seq_indicador integer not null,
  co_ibge integer,
  co_cnes integer,
  co_anomesdia char(8),
  co_anomes char(6),
  co_ano char(4),
  nu_valor numeric(12,6),
  dt_inclusao timestamp without time zone not null,
  dt_atualizacao timestamp without time zone,
  CONSTRAINT tb_resultado_pkey PRIMARY KEY (co_seq)
);

COMMENT ON TABLE dbesusgestor.tb_resultado IS 'Armazena os dados de resultado do indicador para aqueles que nao possuem query associada';
COMMENT ON COLUMN dbesusgestor.tb_resultado.co_seq IS 'Codigo tabela resultado - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_resultado.co_ibge IS 'Referência para tabela de municipio';

COMMENT ON COLUMN dbesusgestor.tb_resultado.co_cnes IS 'Referência para tabela de CNES';
COMMENT ON COLUMN dbesusgestor.tb_resultado.co_anomesdia IS 'Referência para armazenamento do tipo ano com 4 caracteres, mes com 2 caracteres e dia com 2 caracteres';
COMMENT ON COLUMN dbesusgestor.tb_resultado.co_anomes IS 'Referência para armazenamento do tipo ano com 4 caracteres e mes com 2 caracteres';
COMMENT ON COLUMN dbesusgestor.tb_resultado.co_ano IS 'Referência para armazenamento do tipo ano com 4 caracteres';
COMMENT ON COLUMN dbesusgestor.tb_resultado.nu_valor IS 'Valor do item (valor numerico quantitativo, porcentagem, etc)';

COMMENT ON COLUMN dbesusgestor.tb_resultado.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_resultado.dt_atualizacao IS 'Data de atualização do registro';

alter table dbesusgestor.tb_resultado add constraint tb_resultado_co_seq_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_resultado add constraint tb_resultado_co_ibge_fkey FOREIGN KEY (co_ibge) REFERENCES dbesusgestor.tb_municipio(co_ibge);
alter table dbesusgestor.tb_resultado add constraint tb_resultado_co_data_fkey FOREIGN KEY (co_anomesdia) REFERENCES dbesusgestor.tb_tempo(co_anomesdia);
