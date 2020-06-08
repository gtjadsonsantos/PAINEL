FROM node:12.13.1

RUN yarn add sqlite3 

RUN mkdir -p /backend
WORKDIR /backend

COPY ./package.json /backend

RUN npm install

COPY . /backend

EXPOSE 3333 

CMD [ "npm","run","start"]
