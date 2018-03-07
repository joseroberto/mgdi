FROM keymetrics/pm2:latest-alpine

LABEL maintainer="joserobertovasconcelos@gmail.com" \
  description="Esta imagem exige os seguintes parâmetros: \
  * COMPANY - Título da empresa \
  * HOSTDB - IP/Host da máquina de banco de dados \
  * DATABASE - Nome do banco de dados \
  * USER_DB - Usuário do banco de dados \
  * PASSWORD_DB - Senha do usuário do banco de dados \
  * SCHEMA - Schema da base de dados utilizado para o sistema MGI na base de dados \
  * HOST - host a ser chamado para api (formato pode ser host:port) \
  \
  Dependendo da escolha do tipo de esquema de validação: \
  \
  * SCHEMA_LOGIN - pode assumir os seguintes valores: ldap, scpa, local, windows. \
  \
  ##LDAP \
  \
  * URL - Url do serviço de LDAP.  Por exemplo: ldap://localhost. \
  * BIND_DN - Domain name do usuário que fará a consulta LDAP. Por exemplo: cn=admin, dc=exemplo, dc=com, dc=br \
  * BIND_CREDENTIALS - Senha do usuário de consulta LDAP \
  * SEARCH_BASE - Qual a base de busca do usuário do login no serviço de diretório. Por exemplo: DC=exemplo, DC=com, DC=br \
  * SEARCH_FILTER - Qual o filtro. Por exemplo: (uid={{username}}).  O nome username é o utilizado pelo sistema para retornar a identificação do usuário que está logando. \
  * NAMEFIELD - Nome do campo do ldap que retorna o nome (ex: givenName ) \
  * MAILFIELD - Nome do campo do ldap que retorna o email (ex: mail ) \
  \
  ##SCPA \
  \
  * WSDL - Qual o endereço utilizado para consulta de usuário no SCPA. Por exemplo: http://aplicacao-homologacao.saude.gov.br/datasus-scpa-ws/ScpaServiceImpl?wsdl \
  * SISTEMA - Qual o nome do sistema a ser utilizado para login."


# Bundle APP files
RUN mkdir -p /var/opt/mgi && \
  mkdir /.pm2 && \
  chgrp -R 0 /.pm2 && \
  chmod -R g+rwX /.pm2

ADD . /var/opt/mgi
WORKDIR /var/opt/mgi
RUN   apk add --no-cache --virtual git && \
  npm install &&  \
  chgrp -R 0 /var/opt/mgi && \
  chmod -R g+rwX /var/opt/mgi && \
  apk del git

EXPOSE 8000
USER 1001
WORKDIR /var/opt/mgi

CMD [ "pm2-runtime", "config/pm2-api.config.yaml"]
