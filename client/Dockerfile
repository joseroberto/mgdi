FROM nginx:stable-alpine
LABEL maintainer="joserobertovasconcelos@gmail.com"

ADD ./dist /etc/nginx/html/mgdi
COPY docker-config/default.conf /etc/nginx/conf.d/default.conf
COPY docker-config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 5000

ENV URL_REST "http://exemplo.com"
ENV CONTEXT_REST "/api"
ENV URL_AUTH ""
ENV APP "MGI"


CMD printenv|while IFS='=' read -r name value ; do sed -i -e "s#$name#$value#g" /etc/nginx/html/mgdi/main.bundle.js; done && nginx -g 'daemon off;'
