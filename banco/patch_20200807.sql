alter table dbesusgestor.tb_aplicacao add ds_timeout int;

update dbesusgestor.tb_aplicacao set ds_timeout=30;