FROM node:12.16.1

ENV ADDRESS_BACKEND_PUBLIC = "192.168.0.21:3333"

RUN mkdir -p /home/node/PAINEL/frontend
WORKDIR /home/node/PAINEL/frontend

COPY ./package.json /home/node/PAINEL/frontend

COPY . /home/node/PAINEL/frontend

RUN npm run build

RUN npm install

RUN echo "export default { backend: {  url: 'http://${ADDRESS_BACKEND_PUBLIC}' } }" > /home/node/PAINEL/frontend/src/config.js

EXPOSE 8080 

CMD [ "npm","run","server"]


# docker push disciplina/paineldesalasfrontend:1.0
# docker build -t paineldesalasfrontend .
# docker tag paineldesalasfrontend disciplina/paineldesalasfrontend:1.0