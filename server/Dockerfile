FROM keymetrics/pm2:6

LABEL maintainer="joserobertovasconcelos@gmail.com" \
      description="Esta imagem exige os seguintes parâmetros: \
                * HOSTDB - endereço do servidor de banco de dados. \
                * DATABASE - nome da base de dados \
                * USER - usuario com acesso ao banco \
                * PASSWORD - senha de acesso \
                * HOST - endereco do host \
                * WSDL - endereco da validacao de senha"
ENV HOSTDB=localhost \
      DATABASE=dbspo \
      USER=user \
      PASSWORD=passwd \
      HOST=localhost \
      WSDL=http://

# Bundle APP files
RUN mkdir -p /var/opt/mgi && \
      mkdir /.pm2 && \
      chgrp -R 0 /.pm2 && \
	chmod -R g+rwX /.pm2
ADD . /var/opt/mgi
WORKDIR /var/opt/mgi
RUN apk add --no-cache --virtual git && \
      npm install &&  \
      apk del git

EXPOSE 8000
USER 1001
WORKDIR /var/opt/mgi

CMD [ "start", "config/pm2-esusgestor.config.yaml" ]
ENTRYPOINT ["pm2-docker"]