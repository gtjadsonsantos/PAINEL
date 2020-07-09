FROM node:10.21.0

RUN mkdir /backend
COPY ./backend /backend


RUN cd /backend && yarn global add sqlite3 node-pre-gyp && yarn 

RUN mkdir /frontend

COPY ./frontend /frontend

RUN cd /frontend && yarn && yarn build && rm -rf /frontend

EXPOSE 3333 

WORKDIR /backend 

CMD [ "yarn","start"]
