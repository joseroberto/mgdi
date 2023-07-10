FROM node:8.17 as build-stage
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build:prod --quiet --no-progress

FROM nginx:stable-alpine as production

COPY --from=build-stage /app/dist /etc/nginx/html
COPY --from=build-stage /app/docker-config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/docker-config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 5000

#ENV URL_REST "http://exemplo.com.br"
#ENV API_URL "/api"
#ENV CONTEXT "/"
#ENV URL_AUTH ""
#ENV APP "MGDI"

CMD nginx -g 'daemon off;'

#CMD printenv|while IFS='=' read -r name value ; do sed -i -e "s#$name#$value#g" /etc/nginx/html/main.bundle.js; done && nginx -g 'daemon off;'

#CMD printenv|while IFS='=' read -r name value ; do sed -i -e "s#$name#$value#g" /etc/nginx/html/mgdi/main.bundle.js; done && nginx -g 'daemon off;'
