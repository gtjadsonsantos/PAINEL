FROM node:10.21.0

RUN mkdir -p /backend

RUN mkdir -p /frontend

COPY ./backend/package.json /backend

COPY ./backend /backend

WORKDIR /backend

RUN yarn global add sqlite3
RUN yarn global add node-pre-gyp

RUN yarn 

RUN yarn add axios body-parser cors express jsonwebtoken knex multer socket.io sqlite sqlite3

COPY ./frontend /frontend

RUN cd /frontend && yarn && yarn build

EXPOSE 3333 

CMD [ "yarn","start"]