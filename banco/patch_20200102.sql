alter table dbesusgestor.tb_aplicacao add column ds_sigla varchar(10);
update dbesusgestor.tb_aplicacao set ds_sigla='MGI' where co_aplicacao=1;
alter table dbesusgestor.tb_aplicacao alter column ds_sigla set not null;
