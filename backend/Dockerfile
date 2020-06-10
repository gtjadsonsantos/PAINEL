FROM node:10.21.0

RUN yarn add sqlite3 


RUN mkdir -p /backend

WORKDIR /backend

COPY ./package.json /backend

COPY . /backend

RUN yarn global add sqlite3
RUN yarn global add node-pre-gyp

RUN yarn 

RUN yarn add axios body-parser cors express jsonwebtoken knex multer socket.io sqlite sqlite3

EXPOSE 3333 

CMD [ "yarn","start"]