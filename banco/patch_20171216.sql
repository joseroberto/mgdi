alter table dbesusgestor.tb_user_mgi add column ds_login varchar(255);
delete from dbesusgestor.tb_user_mgi;
alter table dbesusgestor.tb_user_mgi alter column ds_login set not null;
alter table dbesusgestor.tb_user_mgi add column dt_login timestamp without time zone not null;

alter table dbesusgestor.tb_user_mgi add column ds_telefone varchar(100);

--alter table dbesusgestor.tb_user_mgi add column ds_unidade;
--alter table dbesusgestor.tb_user_mgi drop column ds_unidade;


COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_login IS 'Login do usuário';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.dt_inclusao IS 'Data do último login';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_telefone IS 'Telefone';


create unique index tb_user_mgi_ds_login on dbesusgestor.tb_user_mgi (ds_login);

alter table dbesusgestor.tb_user_mgi add column co_unidade int;
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.ds_telefone IS 'Unidade que usuario esta vinculado';

alter table dbesusgestor.tb_user_mgi add constraint fk_tb_user_mgi_co_unidade foreign key (co_unidade)
references dbesusgestor.tb_unidade(co_unidade);

alter table dbesusgestor.tb_user_mgi add column co_perfil int not null;
alter table dbesusgestor.tb_user_mgi add column dt_aprovacao_perfil timestamp without time zone;
alter table dbesusgestor.tb_user_mgi add column co_user_aprovacao int;

COMMENT ON COLUMN dbesusgestor.tb_user_mgi.co_perfil IS 'Codigo do perfil de usuario';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.dt_aprovacao_perfil IS 'Data de aprovacao do perfil';
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.co_user_aprovacao IS 'Usuario aprovacao perfil';

alter table dbesusgestor.tb_user_mgi add constraint fk_tb_user_mgi_co_user_aprovacao foreign key (co_user_aprovacao)
references dbesusgestor.tb_user_mgi(co_user);

create table dbesusgestor.tb_perfil(
    co_perfil serial not null,
    ds_sigla char(3) not null,
    ds_titulo varchar(50) not null,
    ds_perfil varchar(255) not null,
    st_perfil boolean not null default 'T',
    st_exige_unidade boolean not null default 'F',
    CONSTRAINT tb_perfil_pkey PRIMARY KEY (co_perfil)
);
COMMENT ON TABLE dbesusgestor.tb_perfil IS 'Armazena os possíveis perfis de usuário';
COMMENT ON COLUMN dbesusgestor.tb_perfil.co_perfil IS 'Surrogate key do perfil';
COMMENT ON COLUMN dbesusgestor.tb_perfil.ds_sigla IS 'Sigla do perfil';
COMMENT ON COLUMN dbesusgestor.tb_perfil.ds_titulo IS 'Titulo do perfil';
COMMENT ON COLUMN dbesusgestor.tb_perfil.ds_perfil IS 'Descricao do perfil';
COMMENT ON COLUMN dbesusgestor.tb_perfil.st_perfil IS 'Status ativo/inativo para o perfil';
COMMENT ON COLUMN dbesusgestor.tb_perfil.st_exige_unidade IS 'Flag para indicar se o perfil exige unidade vinculada';

create unique index dbesusgestor.ux_tb_perfil_ds_sigla on dbesusgestor.tb_perfil(ds_sigla);

insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, st_exige_unidade) values ('ADM', 'Administrador do Sistema', 'O administrador do sistema é responsável por gerenciar permissões e checar dados do sistema.', 'F');
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, st_exige_unidade) values ('GES', 'Gestor da área', 'O gestor da área é responsável por manter informações de indicadores específicos da área.', 'T');
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, st_exige_unidade) values ('EQA', 'Membro da equipe das áreas', 'Membros de equipes são responsáveis por alimentar o sistema com informações de indicadores específicas da área.', 'T');


alter table dbesusgestor.tb_user_mgi add constraint fk_tb_user_mgi_co_perfil foreign key (co_perfil)
  references dbesusgestor.tb_perfil(co_perfil);

alter table dbesusgestor.tb_user_mgi add column co_situacao_perfil int not null default 0;
COMMENT ON COLUMN dbesusgestor.tb_user_mgi.co_situacao_perfil IS 'Situação da aprovação da conta de usuário';

alter table dbesusgestor.tb_user_mgi alter column dt_login set default now();

create table dbesusgestor.tb_status_aprovacao(
    co_status int not null,
    ds_status varchar(255) not null,
    CONSTRAINT tb_status_aprovacao_pkey PRIMARY KEY (co_status)
);
COMMENT ON TABLE dbesusgestor.tb_status_aprovacao IS 'Armazena os possíveis status de aprovação de fluxo';
COMMENT ON COLUMN dbesusgestor.tb_status_aprovacao.co_status IS 'Surrogate key do status';
COMMENT ON COLUMN dbesusgestor.tb_status_aprovacao.ds_status IS 'Descrição do status';

insert into dbesusgestor.tb_status_aprovacao (co_status, ds_status) values (0, 'Em análise');
insert into dbesusgestor.tb_status_aprovacao (co_status, ds_status) values (1, 'Aprovado');
insert into dbesusgestor.tb_status_aprovacao (co_status, ds_status) values (2, 'Negado');

alter table dbesusgestor.tb_user_mgi add constraint fk_tb_user_mgi_co_situacao foreign key (co_situacao_perfil)
  references dbesusgestor.tb_status_aprovacao(co_status);

alter table dbesusgestor.tb_user_mgi add column co_sexo char(1) not null;
