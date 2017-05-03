# Instalação do server

Utilize o pm2 para gerenciar o server

# Instalação do serviço sob o pm2

Inicie o serviço com o arquivo de configuração disponível na pasta /config

'''
pm2 start config/pm2-sgi.config.yaml --env production
'''

# Restart do serviço sob o pm2

A substituição do código do SGI sob pm2 já faz restart automático (conforme configuração definida config/pm2-sgi.config.yaml)

'''
pm2 restart sgi-server --update-env prod
'''

# Monitoração de logs, consumo de CPU/Memória e instancias

'''
pm2 monit
'''
