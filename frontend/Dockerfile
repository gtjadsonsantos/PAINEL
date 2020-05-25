FROM node:12.16.1

ENV ADDRESS_BACKEND_PUBLIC "192.168.0.21:3333"

RUN mkdir -p /home/node/PAINEL/frontend
WORKDIR /home/node/PAINEL/frontend

COPY ./package.json /home/node/PAINEL/frontend

COPY . /home/node/PAINEL/frontend

RUN echo "export default { backend: {  url: 'http://${ADDRESS_BACKEND_PUBLIC}' }, logo: 'https://jadson179.github.io/SITE-PAINEL/logo192.png' }" > /home/node/PAINEL/frontend/src/config.js

RUN npm run build

RUN npm install

EXPOSE 8080 

CMD [ "npm","run","server"]
