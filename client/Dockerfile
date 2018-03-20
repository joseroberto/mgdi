FROM nginx:stable-alpine
LABEL maintainer="joserobertovasconcelos@gmail.com"

RUN mkdir -p /usr/share/nginx/html/mgdi
ADD ./dist /usr/share/nginx/html/mgdi
COPY docker-config/default.conf /etc/nginx/conf.d/default.conf
COPY docker-config/nginx.conf /etc/nginx/nginx.conf
RUN chgrp -R 0 /var/cache/nginx && \
	chmod -R g+rwX /var/cache/nginx && \
  chgrp -R 0 /var/run && \
  chmod -R g+rwX /var/run
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
USER 1001