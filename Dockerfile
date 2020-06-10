FROM node:10.21.0

#BEGIN BACKEND 
RUN mkdir -p /backend 
COPY ./backend/package.json /backend
COPY ./backend /backend
WORKDIR /backend
RUN yarn global add sqlite3
RUN yarn global add node-pre-gyp
RUN yarn 
RUN yarn add axios body-parser cors express jsonwebtoken knex multer socket.io sqlite sqlite3
#END BACKEND 


#BEGIN FRONTEND 
RUN mkdir -p /frontend
COPY ./frontend /frontend
RUN cd /frontend && yarn && yarn build
RUN rm -rf /frontend
#END FRONTEND 

EXPOSE 3333 

CMD [ "yarn","start"]