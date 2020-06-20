FROM node:10.21.0-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git 

RUN cd / && git clone https://github.com/jadson179/PAINEL.git

RUN cd /PAINEL/backend && yarn global add sqlite3 node-pre-gyp && yarn 

RUN cd /PAINEL/frontend && yarn && yarn build && rm -rf /PAINEL/frontend

EXPOSE 3333 

WORKDIR /PAINEL/backend 

CMD [ "yarn","start"]
