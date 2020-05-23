FROM node:12.16.1

RUN mkdir -p /home/node/PAINEL/frontend
WORKDIR /home/node/PAINEL/frontend

COPY ./package.json /home/node/PAINEL/frontend
RUN npm install

COPY . /home/node/PAINEL/frontend

RUN echo -e "const config = { backend: {  url: `http://${ADDRESS_BACKEND_PUBLIC}` } } \n export default config " > /home/node/PAINEL/frontend/src/config.js

EXPOSE 8080 

CMD [ "npm","run","server"]
