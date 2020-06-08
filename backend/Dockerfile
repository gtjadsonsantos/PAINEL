FROM node:12.16.3

# Install libs 
RUN yarn global add nw-gyp

RUN yarn global add sqlite3 


RUN mkdir -p /backend

RUN npm install -g npx

RUN npx knex migrate:latest

RUN npx knex seed:run

WORKDIR /backend

COPY ./package.json /backend

COPY . /backend

EXPOSE 3333 

CMD [ "yarn","start"]
