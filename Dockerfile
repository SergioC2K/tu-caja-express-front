FROM nginx:1.23.2-alpine
COPY docker/ngnix/default.conf /etc/nginx/conf.d/default.conf
COPY dist/tucajaexpress-front /app
