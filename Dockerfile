FROM node:10.21.0

RUN mkdir /backend
COPY ./backend /backend

RUN cd / && git clone https://github.com/jadson179/PAINEL.git

RUN cd /PAINEL/backend && yarn global add sqlite3 node-pre-gyp && yarn 

RUN mkdir /frontend

COPY ./frontend /frontend

RUN cd /PAINEL/frontend && yarn && yarn build && rm -rf /PAINEL/frontend

EXPOSE 3333 

WORKDIR /PAINEL/backend 

CMD [ "yarn","start"]
