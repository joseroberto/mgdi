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
