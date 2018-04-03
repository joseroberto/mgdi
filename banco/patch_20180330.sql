--insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, st_perfil, st_exige_unidade, co_aplicacao, ds_perfil) values (
--    'ADN', 'Administrador de negócio', 'T', 'F', 1, 'Responsável por administrar todas as fichas atribuídas as áreas');

-- select * from dbesusgestor.tb_user_mgi;
-- delete from dbesusgestor.tb_user_mgi where co_user=10;

-- select * from dbesusgestor.tb_regiao;
-- select * from dbesusgestor.tb_uf;

alter table dbesusgestor.tb_uf drop co_regiao;
alter table dbesusgestor.tb_uf add column co_regiao smallint;

update dbesusgestor.tb_uf set co_regiao=floor(co_uf/10);
alter table dbesusgestor.tb_uf alter column co_regiao set not null;

alter table dbesusgestor.tb_regiao add column sg_regiao char(2);

update dbesusgestor.tb_regiao set sg_regiao=co_regiao;

update dbesusgestor.tb_regiao set co_regiao=1 where sg_regiao='NO';
update dbesusgestor.tb_regiao set co_regiao=2 where sg_regiao='NE';
update dbesusgestor.tb_regiao set co_regiao=3 where sg_regiao='SD';
update dbesusgestor.tb_regiao set co_regiao=4 where sg_regiao='SU';
update dbesusgestor.tb_regiao set co_regiao=5 where sg_regiao='CO';

alter table dbesusgestor.tb_regiao alter column sg_regiao set not null;
alter table dbesusgestor.tb_regiao alter column co_regiao type smallint using co_regiao::smallint;

insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao, sg_regiao) values (0, '','');
insert into dbesusgestor.tb_regiao (co_regiao, ds_regiao, sg_regiao) values (9, 'Sem Informação','SI');

alter table dbesusgestor.tb_uf ADD CONSTRAINT tb_uf_co_regiao_fkey FOREIGN KEY (co_regiao) 
        REFERENCES dbesusgestor.tb_regiao(co_regiao);


