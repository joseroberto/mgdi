
--- Cria a coluna ds_sigla na tabela dbesusgestor.tb_granularidade e atualiza valores

--alter table dbesusgestor.tb_granularidade drop column ds_sigla;
alter table dbesusgestor.tb_granularidade add column ds_sigla char(2);
ALTER TABLE dbesusgestor.tb_granularidade DISABLE TRIGGER ALL;
update dbesusgestor.tb_granularidade set ds_sigla='CN', co_granularidade=5 where co_granularidade=4;
update dbesusgestor.tb_granularidade set ds_sigla='MN', co_granularidade=4 where co_granularidade=3;
update dbesusgestor.tb_granularidade set ds_sigla='UF', co_granularidade=3 where co_granularidade=2;
update dbesusgestor.tb_granularidade set ds_sigla='BR' where co_granularidade=1;
ALTER TABLE dbesusgestor.tb_granularidade ENABLE TRIGGER ALL;
update dbesusgestor.tb_granularidade set ds_sigla='' where co_granularidade=0;

insert into dbesusgestor.tb_granularidade values(2, 'Região', 'RG');

alter table dbesusgestor.tb_granularidade alter column ds_sigla set not null;

update dbesusgestor.tb_indicador set co_granularidade=co_granularidade+1 where co_granularidade>=2;
