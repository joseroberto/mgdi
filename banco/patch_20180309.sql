--Criação do campo titulo completo na base de  dados
ALTER TABLE dbesusgestor.tb_indicador ADD COLUMN ds_titulo_completo text;
ALTER TABLE dbesusgestor.tb_indicador ADD COLUMN ds_diretriz_nacional text;
ALTER TABLE dbesusgestor.tb_indicador ADD COLUMN ds_objetivo_relevancia text;