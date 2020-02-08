FROM node:13.8-alpine
LABEL description="Yet another IP information API"
LABEL version="1.0"
LABEL author="renato@yuzu-project.com"

RUN apk update && \
    apk upgrade -q
COPY ./package*.json /app/
WORKDIR /app
RUN npm install
COPY ./src /app/src
CMD [ "node", "/app/src/index.js" ]
