# Desenvolvimento

Existem 2 opções para desenvolver a API. A configuração para essas opções se encontra no diretório /config, nos arquivos default

*  Utilizar uma base local

 `swagger project start`

*  Utilizar a base de dados em outra máquina (production ou test)

`NODE_ENV=production swagger project start`
 ou
 `NODE_ENV=production swagger project start`

# Instalação do server

A sugestão para gestão de nodes é utilizar o pm2 para gerenciar os processos.

# Instalação do serviço sob o pm2

Inicie o serviço com o arquivo de configuração disponível na pasta /config

'''
pm2 start config/pm2-esusgestor.config.yaml --env production
'''

# Restart do serviço sob o pm2

A substituição do código do SGI sob pm2 já faz restart automático (conforme configuração definida config/pm2-esusgestor.config.yaml)

'''
pm2 restart sgi-server --update-env prod
'''

# Monitoração de logs, consumo de CPU/Memória e instancias

'''
pm2 monit
'''

# Configuração para variáveis de ambiente

Se for mais conveniente, a configuração do serviço poderá ser feita utilizando variáveis de ambiente, ou nos arquivos de configuração 'config/default.yaml'

As seguintes variáveis poderão ser definidas:

* HOSTDB - IP/Host da máquina de banco de dados
* DATABASE - Nome do banco de dados
* USER_DB - Usuário do banco de dados
* PASSWORD_DB - Senha do usuário do banco de dados
* WSDL - Endereço de acesso da API de validação.
* SCHEMA - Schema da base de dados utilizado para o sistema MGI na base de dados
* HOST - host a ser chamado para api (formato pode ser host:port)

Dependendo da escolha do tipo de esquema de validação:

* SCHEMA_LOGIN - pode assumir os seguintes valores: ldap, scpa, local.

##LDAP

* URL - Url do serviço de LDAP.  Por exemplo: ldap://localhost.
* BIND_DN - Domain name do usuário que fará a consulta LDAP. Por exemplo: cn=admin, dc=exemplo, dc=com, dc=br
* BIND_CREDENTIALS - Senha do usuário de consulta LDAP
* SEARCH_BASE - Qual a base de busca do usuário do login no serviço de diretório. Por exemplo: DC=exemplo, DC=com, DC=br
* SEARCH_FILTER - Qual o filtro. Por exemplo: (uid={{username}}).  O nome username é o utilizado pelo sistema para retornar a identificação do usuário que está logando.

##SCPA

* WSDL - Qual o endereço utilizado para consulta de usuário no SCPA. Por exemplo: http://aplicacao-homologacao.saude.gov.br/datasus-scpa-ws/ScpaServiceImpl?wsdl
* SISTEMA - Qual o nome do sistema a ser utilizado para login.


(*) A configuração por variável de ambiente bypass aquela por arquivo config.
