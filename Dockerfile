FROM nginx:alpine
COPY dist/tucajaexpress-front/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf