alter table dbesusgestor.tb_uf add column co_regiao char(2);

CREATE TABLE dbesusgestor.tb_regiao (
    co_regiao char(2) NOT NULL,
    ds_regiao varchar(50),
    CONSTRAINT tb_regiao_pkey PRIMARY KEY (co_regiao)
);

COMMENT ON TABLE dbesusgestor.tb_regiao IS 'Tabela para as regiões do Brasil';

COMMENT ON COLUMN dbesusgestor.tb_regiao.co_regiao IS 'Codigo identificador da região.';
COMMENT ON COLUMN dbesusgestor.tb_regiao.ds_regiao IS 'Descrição da região.';

insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao) values ('NE', 'Nordeste');
insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao) values ('NO', 'Norte');
insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao) values ('SU', 'Sul');
insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao) values ('SD', 'Sudeste');
insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao) values ('CO', 'Centro-Oeste');

update dbesusgestor.tb_uf  set co_regiao='NE' where no_uf in ('CE','PB','RN','PE','SE','BA','AL', 'MA', 'PI');
update dbesusgestor.tb_uf  set co_regiao='NO' where no_uf in ('TO','PA','AM','RR','RO','AC','AM');
update dbesusgestor.tb_uf  set co_regiao='CO' where no_uf in ('MT','DF','MS','MT','GO');
update dbesusgestor.tb_uf  set co_regiao='SD' where no_uf in ('MG','SP','RJ','ES');
update dbesusgestor.tb_uf  set co_regiao='SU' where no_uf in ('PR','SC','RS');

alter table dbesusgestor.tb_uf add CONSTRAINT tb_regiao_co_regiao_fkey FOREIGN KEY (co_regiao)
REFERENCES tb_regiao(co_regiao);
