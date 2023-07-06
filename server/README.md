# Instalação

Para configuração do ambiente na máquina de desenvolvimento seguir os seguintes passos:

1. Instalar o node 8 

``` shell
nvm install 8
nvm use 8
```

2. Instalar o swagger na máquina

``` shell
npm install -g swagger
```

3. Instalar as bibiotecas

``` shell
npm install
```

4. Execute o backend

``` shell

npm run start
```

# Outras instruções

Modelo para arquivo .env

```
HOSTDB=localhost
PROTOCOLO=http
DATABASE=sage
USER_DB=postgres
PASSWORD_DB=12345678
COMPANY="Ministério da Saúde - MS"
SCHEMA_LOGIN=local
SISTEMA=MGDI
HOST=localhost:8000
SCHEMA=dbmgdi
ENVIRONMENT=development
DEBUG=true
```

* Necessário instalar um postgres (estamos usando a versão 15).  Pode ser um docker:

``` shell
mkdir  ~/data

docker run -d --name psql -p 5432:5432 -e POSTGRES_PASSWORD=sagems -e PGDATA=/var/lib/postgresql/data/pgdata -v $PWD/data:/var/lib/postgresql/data postgres:15
```

Entre no banco e crie um database (o comando acima criou o usuário postgres com senha sagems):

``` sql
create database sage;
```

Recupere o backup para dentro do banco

``` shell
psql -h localhost -U postgres sage < dbmgdi.dump

```

# Swagger JSON
This is a swagger JSON built by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.

pm2-runtime start config/pm2-api-dev.config.yaml

# Referencias

https://github.com/swagger-api/swagger-node