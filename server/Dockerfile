FROM keymetrics/pm2-docker-alpine:6

LABEL maintainer="joserobertovasconcelos@gmail.com" \
      description="Esta imagem exige os seguintes parâmetros: \
                * HOSTDB - endereço do servidor de banco de dados. \
                * DATABASE - nome da base de dados \
                * USER - usuario com acesso ao banco \
                * PASSWORD - senha de acesso \
                * HOST - endereco do host \
                * WSDL - endereco da validacao de senha"

# Bundle APP files
RUN mkdir -p /var/opt/mgi
ADD . /var/opt/mgi


EXPOSE 8000
WORKDIR /var/opt/mgi

CMD [ "start", "config/pm2-api.config.yaml" ]
ENTRYPOINT ["pm2-docker"]
