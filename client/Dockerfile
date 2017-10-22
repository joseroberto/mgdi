FROM nginx:stable-alpine
LABEL maintainer="joserobertovasconcelos@gmail.com"

ADD dist /usr/share/nginx/html
COPY docker-config/default.conf /etc/nginx/conf.d/default.conf
COPY docker-config/nginx.conf /etc/nginx/nginx.conf
RUN chgrp -R 0 /var/cache/nginx && \
	chmod -R g+rwX /var/cache/nginx && \
    chgrp -R 0 /var/run && \
    chmod -R g+rwX /var/run
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
USER 1001