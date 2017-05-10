alter table dbesusgestor.tb_indicador_relacionado add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_relacionado add column dt_atualizacao timestamp without time zone;

alter table dbesusgestor.tb_indicador_categoria_analise add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_categoria_analise add column dt_atualizacao timestamp without time zone;

COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_relacionado.dt_atualizacao IS 'Data de alteração do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador_categoria_analise.dt_atualizacao IS 'Data de alteração do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_indicador.dt_atualizacao IS 'Data de alteração do registro';
