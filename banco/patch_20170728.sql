-- Muda coluna id da tabela tb_indicador
alter table dbesusgestor.tb_indicador add column co_seq_indicador serial not null;

-- cancela as regras de consistencia
alter table dbesusgestor.tb_indicador_relacionado drop constraint tb_indicador_relacionado_co_indicador_fkey;
alter table dbesusgestor.tb_indicador_relacionado drop constraint tb_indicador_relacionado_co_indicador_pai_fkey;
alter table dbesusgestor.tb_indicador_categoria_analise drop constraint tb_indicador_categoria_analise_co_indicador_fkey;
alter table dbesusgestor.tb_indicador_tag drop constraint tb_indicador_tag_co_indicador_fkey;

-- cria nova chave primaria
alter table dbesusgestor.tb_indicador drop constraint pk_indicador;
alter table dbesusgestor.tb_indicador add constraint pk_indicador PRIMARY KEY (co_seq_indicador);

-- cria novas colunas
alter table dbesusgestor.tb_indicador_relacionado add column co_seq_indicador int;
alter table dbesusgestor.tb_indicador_relacionado add column co_seq_indicador_pai int;
alter table dbesusgestor.tb_indicador_categoria_analise add column co_seq_indicador int;
alter table dbesusgestor.tb_indicador_tag add column co_seq_indicador int;

-- atualiza dados

update dbesusgestor.tb_indicador_relacionado set co_seq_indicador = dbesusgestor.tb_indicador.co_seq_indicador
from dbesusgestor.tb_indicador where dbesusgestor.tb_indicador.co_indicador = dbesusgestor.tb_indicador_relacionado.co_indicador;

update dbesusgestor.tb_indicador_relacionado set co_seq_indicador_pai = dbesusgestor.tb_indicador.co_seq_indicador
from dbesusgestor.tb_indicador where dbesusgestor.tb_indicador.co_indicador = dbesusgestor.tb_indicador_relacionado.co_indicador_pai;

update dbesusgestor.tb_indicador_categoria_analise set co_seq_indicador = dbesusgestor.tb_indicador.co_seq_indicador
from dbesusgestor.tb_indicador where dbesusgestor.tb_indicador.co_indicador = dbesusgestor.tb_indicador_categoria_analise.co_indicador;

update dbesusgestor.tb_indicador_tag set co_seq_indicador = dbesusgestor.tb_indicador.co_seq_indicador
from dbesusgestor.tb_indicador where dbesusgestor.tb_indicador.co_indicador = dbesusgestor.tb_indicador_tag.co_indicador;

-- CONFERE

-- coloca constraint not null;
alter table dbesusgestor.tb_indicador_categoria_analise alter column co_seq_indicador set not null;
alter table dbesusgestor.tb_indicador_relacionado alter column co_seq_indicador set not null;
alter table dbesusgestor.tb_indicador_relacionado alter column co_seq_indicador_pai set not null;
alter table dbesusgestor.tb_indicador_tag alter column co_seq_indicador set not null;

-- apaga colunas adicionais

alter table dbesusgestor.tb_indicador_relacionado drop column co_indicador;
alter table dbesusgestor.tb_indicador_relacionado drop column co_indicador_pai;
alter table dbesusgestor.tb_indicador_categoria_analise drop column co_indicador;
alter table dbesusgestor.tb_indicador_tag drop column co_indicador;

-- refaz as regras de dependencia

alter table dbesusgestor.tb_indicador_relacionado add constraint tb_indicador_relacionado_co_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_indicador_relacionado add constraint tb_indicador_relacionado_co_indicador_pai_fkey FOREIGN KEY (co_seq_indicador_pai) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_indicador_categoria_analise add constraint tb_indicador_categoria_analise_co_categoria_analise_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);
alter table dbesusgestor.tb_indicador_tag add constraint tb_indicador_tag_co_indicador_fkey FOREIGN KEY (co_seq_indicador) REFERENCES dbesusgestor.tb_indicador(co_seq_indicador);

-- cria tabela de usuarios

CREATE TABLE dbesusgestor.tb_user_mgi
(
  co_user serial NOT NULL,
  ds_cpf char(11) not null,
  ds_nome varchar(255) not null,
  ds_email varchar(100) not null,
  ds_ramal varchar(100),
  ds_celular varchar(100),
  ar_perfis varchar(20)[],
  dt_inclusao timestamp without time zone not null,
  dt_atualizacao timestamp without time zone,
  CONSTRAINT tb_user_mgi_pkey PRIMARY KEY (co_user)
);

COMMENT ON TABLE dbesusgestor.tb_user_mgi IS 'Armazena os dados complementares aos usuários da aplicação MGI';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.co_user IS 'Código interno do usuário - Surrogate Key';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_cpf IS 'CPF do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_nome IS 'Nome do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_email IS 'Email do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_ramal IS 'Ramal do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_celular IS 'Celular do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.dt_inclusao IS 'Data de inclusão do registro';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.dt_atualizacao IS 'Data de alteração do registro';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ar_perfis IS 'Array com perfis do usuário';

create unique index tb_user_mgi_ds_email on dbesusgestor.tb_user_mgi (ds_email);
create unique index tb_user_mgi_ds_cpf on dbesusgestor.tb_user_mgi (ds_cpf);


alter table dbesusgestor.tb_indicador rename column st_especifico to st_universal;
alter table dbesusgestor.tb_indicador alter column st_universal set default 'T';
alter table dbesusgestor.tb_indicador add column nu_indice_referencia float null;
alter table dbesusgestor.tb_indicador drop column st_carga_manual;

insert into dbesusgestor.tb_tipo_consulta (co_tipo_consulta, ds_tipo_consulta) values (3,'Importação');
