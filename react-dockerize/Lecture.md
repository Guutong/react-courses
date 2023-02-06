### Step 1 - Add a .dockerignore File
`.dockerignore`
```.dockerignore
node_modules
build
```

### Step 2 - Add a Dockerfile 
`Dockerfile`
```Dockerfile
# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]
```


### Step 3 - Build Dockerfile to docker image
```sh
# docker build -f <default Dockerfile> -t <name> .
docker build -t react-dockerize .

# Check the image was created
docker images | grep react-dockerize

# Run the image
docker run -p 3000:3000 react-dockerize

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d react-dockerize

# See logs option -f following logs
docker logs react-dockerize

# Stop container
docker stop react-dockerize
```

### Step 4 - Serve the app through nginx
`nginx.conf`
```conf
server {
  listen 80;

  location / {
    root /usr/share/nginx/html/;
    include /etc/nginx/mime.types;
    try_files $uri $uri/ /index.html;
  }
}
```

`Dockerfile`
```Dockerfile
FROM node:18-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

```sh
docker run -p 80:80 -d react-dockerize
```

### Step 5 - Work with env
```sh
npm install env-cmd --save
# or
yarn add env-cmd
```

`package.json`
```json
{
  ...,
  "scripts": {
    ...,
    "build:dev": "env-cmd -f .env.dev npm run build",
    "build:staging": "env-cmd -f .env.staging npm run build",
    "build:production": "env-cmd -f .env.production npm run build"
    ...
  },
  ...
}
```

### Step 6 - Build with env
`Dockerfile`
```Dockerfile
FROM node:18-alpine as builder

ARG BUILD_MODE=dev

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

# Build the app
RUN npm run build:${BUILD_MODE}

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

```
docker build -f Dockerfile --build-arg BUILD_MODE=staging -t react-dockerize .
```

### Step 7 - Work with sub path
`package.json`
```json
{
  "homepage": "/backoffice"
}
```