FROM node:12-alpine

## CONFIG ADDRESS TO COMUNICATION WITH BACKEND
ENV ADDRESS_BACKEND_PUBLIC "192.168.0.21"

## BEGIN CONFIG API WEATHER
ENV APPID "hFc5Rx4a"
ENV CLIENTID "dj0yJmk9aDFYd3YxaGtBZHNXJmQ9WVdrOWFFWmpOVko0TkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEy"
ENV CLIENTE_SECRET "4ab18573d6fdd4368f6deaa6bded2d36603a9864" 

## END CONFIG API WEATHER

## LOGO

ENV LOGO "https://jadson179.github.io/SITE-PAINEL/logo192.png"


RUN mkdir -p /frontend
WORKDIR /frontend

COPY ./package.json /frontend

COPY . /frontend

RUN echo "export default { backend: {  url: 'http://${ADDRESS_BACKEND_PUBLIC}:3333' }, logo: '${LOGO}', weather: { appID: '${APPID}', clientID: '${CLIENTID}', clientSecret: '${CLIENTE_SECRET}'  }  }" > /frontend/src/config.js

RUN npm install

RUN npm run build 

EXPOSE 8080 

CMD [ "npm","run","server"]
