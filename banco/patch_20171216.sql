alter table dbmgi.tb_user_mgi add column ds_login varchar(255);
delete from dbmgi.tb_user_mgi;
alter table dbmgi.tb_user_mgi alter column ds_login set not null;
alter table dbmgi.tb_user_mgi add column dt_login timestamp without time zone not null;

alter table dbmgi.tb_user_mgi add column ds_telefone;
alter table dbmgi.tb_user_mgi add column ds_unidade;


COMMENT ON COLUMN dbmgi.tb_user_mgi.ds_login IS 'Login do usuário';
COMMENT ON COLUMN dbmgi.tb_user_mgi.dt_inclusao IS 'Data do último login';

create unique index tb_user_mgi_ds_login on dbmgi.tb_user_mgi (ds_login);
