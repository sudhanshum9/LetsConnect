FROM node:12.18.3-alpine3.9 as build-stage
WORKDIR /app
COPY letsconnect/package.json /app
RUN npm install
COPY letsconnect /app/
RUN npm run build

FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80