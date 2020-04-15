alter table dbesusgestor.tb_user_mgi alter column dt_inclusao set default now();

insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, co_aplicacao) values ('ADM', 'Administrador', 'Administrador geral do sistema', 2);
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, co_aplicacao) values ('GEP', 'Gestor de Planos', 'Usuários que criaram um novo plano/projeto para acompanhar', 2);
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, co_aplicacao) values ('GET', 'Gestor Estratégico', ' Usuários com permissões especiais de visualização (por exemplo: secretários, ministros e órgãos de controle)', 2);
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, co_aplicacao) values ('SUP', 'Supervisor', 'Segundo nível de aprovação na monitoração do plano/projeto (por exemplo, chamado nos requisitos de Supervisor AT)', 2);
insert into dbesusgestor.tb_perfil (ds_sigla, ds_titulo, ds_perfil, co_aplicacao) values ('USR', 'Usuário', 'Este assume papéis especiais de acompanhamento se estiverem atribuídos a: Meta; Entrega Intermediária;Atividades', 2);

insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('11111111111', 'admin@gmail.com', 'admin', 'Usuario de teste admin', 0, 13);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('22222222222', 'gesest@gmail.com', 'gesest', 'Usuario de teste gesest', 0, 9);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('33333333333', 'gesplan@gmail.com', 'gesplan', 'Usuario de teste gesplan', 0, 8);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('44444444444', 'supervisor@gmail.com', 'supervisor', 'Usuario de teste supervisor', 0, 10);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('55555555555', 'comum1@gmail.com', 'comum1', 'Usuario de teste comum1', 0, 11);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('66666666666', 'comum3@gmail.com', 'comum3', 'Usuario de teste comum3', 0, 11);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('77777777777', 'comum2@gmail.com', 'comum2', 'Usuario de teste comum2', 0, 11);
insert into dbesusgestor.tb_user_mgi (ds_cpf,ds_email,ds_login,ds_nome,co_sexo, co_perfil) values ('88888888888', 'visualizador@gmail.com', 'visualizador', 'Usuario de teste visualizador', 0, 2);