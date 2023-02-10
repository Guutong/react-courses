# Base image from node 19
# default https://hub.docker.com/
FROM node:19 as build
# arguments --build-arg mode=production
ARG mode
# Working directory start at /app
WORKDIR /app
# Copy source code COPY <source_dir> <destination_dir>
COPY . .
# install node dependentcy
RUN npm install
# build app select node
RUN npm run build:${mode}
# Base image from nginx 
FROM nginx:1.19 as deploy
# Copy nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
# Copy soruce from build stage
COPY --from=build /app/build /usr/share/nginx/html
# expose port 80 (configuration)
EXPOSE 80
# start the nginx
CMD [ "nginx", "-g", "daemon off;" ]