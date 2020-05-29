FROM node:12.16.1

## CONFIG ADDRESS TO COMUNICATION WITH BACKEND
ENV ADDRESS_BACKEND_PUBLIC "192.168.0.21:3333"

## BEGIN CONFIG API WEATHER
ENV APPID "hFc5Rx4a"
ENV CLIENTID "dj0yJmk9aDFYd3YxaGtBZHNXJmQ9WVdrOWFFWmpOVko0TkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEy"
ENV CLIENTE_SECRET "4ab18573d6fdd4368f6deaa6bded2d36603a9864" 

## END CONFIG API WEATHER

## LOGO

ENV LOGO "https://jadson179.github.io/SITE-PAINEL/logo192.png"


RUN mkdir -p /home/node/PAINEL/frontend
WORKDIR /home/node/PAINEL/frontend

COPY ./package.json /home/node/PAINEL/frontend

COPY . /home/node/PAINEL/frontend

RUN echo "export default { backend: {  url: 'http://${ADDRESS_BACKEND_PUBLIC}' }, logo: '${LOGO}', weather: { appID: '${APPID}', clientID: '${CLIENTID}', clientSecret: '${CLIENTE_SECRET}'  }  }" > /home/node/PAINEL/frontend/src/config.js

RUN yarn install

RUN yarn build 

EXPOSE 8080 

CMD [ "yarn","server"]
