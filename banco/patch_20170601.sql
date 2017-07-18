-- DROP TABLE dbesusgestor.tb_unidade;

CREATE TABLE dbesusgestor.tb_unidade
(
  co_unidade serial NOT NULL,
  ds_sigla character varying(50) not null,
  ds_nome character varying(255) not null,
  ds_email character varying(100),
  ds_telefone character varying(50),
  ds_competencia text,
  ds_atividade text,
  co_unidade_pai integer,
  nu_nivel integer,
  st_informal boolean default 'F',
  CONSTRAINT tb_unidade_pkey PRIMARY KEY (co_unidade)
);

COMMENT ON TABLE dbesusgestor.tb_unidade IS 'Armazena as referencias de banco de dados que o SGI pode buscar as informações';
COMMENT ON COLUMN dbesusgestor.tb_unidade.co_unidade IS 'Código da unidade do MS';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_sigla IS 'Sigla da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_nome IS 'Nome da unidade de trabalho';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_competencia IS 'Descritivo com a competencia da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_atividade IS 'Descritivo com a atividade da unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.co_unidade_pai IS 'Código da unidade pai da hierarquia';
COMMENT ON COLUMN dbesusgestor.tb_unidade.st_informal IS 'Flag indicando se a unidade é informal';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_telefone IS 'Telefone de contato com a unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.ds_email IS 'Email de contato com a unidade';
COMMENT ON COLUMN dbesusgestor.tb_unidade.nu_nivel IS 'Nivel na hierarquia';


alter table dbesusgestor.tb_unidade add CONSTRAINT tb_unidade_co_unidade_pai_fkey FOREIGN KEY (co_unidade_pai)
        REFERENCES dbesusgestor.tb_unidade (co_unidade) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

create unique index ux_tb_unidade_ds_sigla on dbesusgestor.tb_unidade (ds_sigla);

create table dbesusgestor.tb_unidade_hierarquia(
  co_unidade int not null,
  co_unidade_superior int not null
);

alter table dbesusgestor.tb_unidade_hierarquia add CONSTRAINT tb_unidade_hierarquia_co_unidade_fkey FOREIGN KEY (co_unidade)
        REFERENCES dbesusgestor.tb_unidade (co_unidade) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;

alter table dbesusgestor.tb_unidade_hierarquia add CONSTRAINT tb_unidade_hierarquia_co_unidade_superior_fkey FOREIGN KEY (co_unidade_superior)
        REFERENCES dbesusgestor.tb_unidade (co_unidade) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION;
-----------------------------------------------

alter table dbesusgestor.tb_indicador_categoria_analise drop constraint tb_indicador_categoria_analise_pkey;
alter table dbesusgestor.tb_indicador_categoria_analise add constraint tb_indicador_categoria_analise_pkey primary key (co_indicador_categoria_analise);

alter table dbesusgestor.tb_indicador rename column co_periodicidade to co_periodicidade_atualizacao;
alter table dbesusgestor.tb_indicador add column co_periodicidade_avaliacao int;
alter table dbesusgestor.tb_indicador add column co_periodicidade_monitoramento int;

update dbesusgestor.tb_indicador set co_periodicidade_avaliacao=co_periodicidade_atualizacao, co_periodicidade_monitoramento=co_periodicidade_atualizacao;

alter table dbesusgestor.tb_indicador add constraint fk_periodicidade_avaliacao_indicador FOREIGN KEY (co_periodicidade_avaliacao) REFERENCES dbesusgestor.tb_periodicidade(co_periodicidade);
alter table dbesusgestor.tb_indicador add constraint fk_periodicidade_monitoramento_indicador FOREIGN KEY (co_periodicidade_monitoramento) REFERENCES dbesusgestor.tb_periodicidade(co_periodicidade);

alter table dbesusgestor.tb_indicador alter column co_periodicidade_avaliacao set not null;
alter table dbesusgestor.tb_indicador alter column co_periodicidade_monitoramento set not null;

alter table dbesusgestor.tb_indicador add column st_especifico boolean not null default 'F';

------
alter table dbesusgestor.tb_indicador add column co_unidade_responsavel int;
alter table dbesusgestor.tb_indicador drop constraint tb_indicador_co_secretaria_fkey;

-- inclui dados que falta na tb_unidade
insert into dbesusgestor.tb_unidade (ds_sigla, ds_nome, nu_nivel) select sg_secretaria, ds_secretaria,1 from dbesusgestor.tb_secretaria where sg_secretaria not in (select ds_sigla from dbesusgestor.tb_unidade);

alter table dbesusgestor.tb_indicador drop constraint tb_indicador_co_secretaria_fkey;

---- Atualiza dados do campo secretaria

update dbesusgestor.tb_indicador set co_secretaria = b.co_unidade
from dbesusgestor.tb_secretaria a inner join dbesusgestor.tb_unidade b on a.sg_secretaria=b.ds_sigla;

---- Atualiza dados do campo unidade responsavel
alter table dbesusgestor.tb_indicador add column co_unidade_responsavel int;
update dbesusgestor.tb_indicador set co_unidade_responsavel = co_secretaria where co_unidade_responsavel is null;

---- Troca campo co_unidade_responsavel para not null;
alter table dbesusgestor.tb_indicador alter column co_unidade_responsavel set not null;

alter table dbesusgestor.tb_indicador  add constraint tb_indicador_co_unidade_fkey FOREIGN KEY (co_secretaria) REFERENCES dbesusgestor.tb_unidade(co_unidade);
alter table dbesusgestor.tb_indicador  add constraint tb_indicador_co_unidade_responsavel_fkey FOREIGN KEY (co_unidade_responsavel) REFERENCES dbesusgestor.tb_unidade(co_unidade);

drop table dbesusgestor.tb_secretaria;

-- update dbesusgestor.tb_unidade  set nu_nivel=1 where nu_nivel is null;
