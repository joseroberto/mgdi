alter table dbesusgestor.tb_indicador_tag add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_tag add column dt_atualizacao timestamp without time zone;


alter table dbesusgestor.tb_indicador_tag add column dt_inclusao timestamp without time zone;
alter table dbesusgestor.tb_indicador_tag add column dt_atualizacao timestamp without time zone;

alter table dbesusgestor.tb_indicador_tag DROP CONSTRAINT tb_indicador_tag_co_indicador_fkey;
alter TABLE dbesusgestor.tb_indicador_tag ADD CONSTRAINT tb_indicador_tag_co_indicador_fkey FOREIGN KEY (co_indicador) REFERENCES dbesusgestor.tb_indicador (co_indicador) ON DELETE CASCADE;
