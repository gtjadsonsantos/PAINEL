#FROM node:10.21.0
FROM node:10-alpine

#BEGIN BACKEND 
#RUN mkdir -p /backend 
COPY ./backend /backend
RUN yarn global add sqlite3 && yarn global add node-pre-gyp && yarn && yarn add axios body-parser cors express jsonwebtoken knex multer socket.io sqlite sqlite3
#END BACKEND 

#BEGIN FRONTEND 
RUN mkdir -p /frontend
COPY ./frontend /frontend
RUN cd /frontend && yarn && yarn build && rm -rf /frontend
#END FRONTEND 
EXPOSE 3333 

WORKDIR /backend 

CMD [ "yarn","start"]