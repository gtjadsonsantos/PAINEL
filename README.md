<p align="center">
<img src="https://camo.githubusercontent.com/13c4e50d88df7178ae1882a203ed57b641674f94/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667">

</p>

<h1 align="center"> PAINEL DE SALAS</h1>

<p align="center" style="display: flex; flex-direction: row; align-content: center; justify-content: center; ">
  <img width="460" height="300"  src="https://github.com/jadson179/PAINEL/raw/develop/images/picture-notebook-with-panel.svg?sanitize=true">

</p>


**Chat: __[WhatsApp](https://api.whatsapp.com/send?phone=5548999328092)**


# FUNCIONALIDADES 

- 🤩 **Json Web Token** 
- 🤩 **Upload de imagens** 
- - **Size** `<= 3MB` 
- - **Mime type accept**: jpeg ,pjpeg ,png, jpg 
- 🤩 **Provisionamento** 
- 🤩 **Multi-Platorma(`web`,`mobile`)** 

# APLICATIVOS 

- [ANDROID](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jadson179/halls-panel-5333fa33f6c947c6959f869a65f5f203-signed.apk)

# MOTIVO

A proposta desta aplicação é tornar simples o gerenciamento de salas, para empreendimento comerciais. 

### REQUISITOS 

[NODEJS > 12.14.1](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/get-npm) ou [YARN](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

[Docker](https://docs.docker.com/install/)

[Docker Compose](https://docs.docker.com/compose/)



## PARA COMEÇAR 🚀 

Faça o download do repositório

```bash
    git clone https://github.com/jadson179/PAINEL.git 
```

Instale as dependências `backend`

```bash
  cd ./backend && yarn install && npx knex migrate:latest && npx knex seed:run --specific=002_users.js
```

Instale as dependências `frontend`

```bash
    cd ./frontend && yarn install && sudo yarn build
```

Configure o endereço ip ou dominio do servidor(`backend`) no frontend alterando a o endereço ip da variável ADDRESS_BACKEND_PUBLIC, a porta deve ser sempre a 3333 

```bash
  cd ./frontend && vim Dockerfile 

```

Configure a chave de encriptação dos tokens da aplicação no backend

```bash
  cd ./backend && vim config.js
```

Retorne a raiz do projeto e suba o container da aplicação

```bash
  sudo docker-compose up
``` 

`Acesse`: http://0.0.0.0:8080


### AUTENTICAÇÃO INICIAL

- `username`: admin
- `password`: admin


# DOCUMENTAÇÃO 

- [DOC BACKEND](https://jadson179.github.io/PAINEL/docs/index.html)




## Licença 📝

Esse projeto usa a licença MIT license - veja o arquivo [LICENSE](LICENSE) para mais detalhes

# AUTOR

<table>
  <tr>
    <td align="center"><a href="https://github.com/jadson179"><img src="https://avatars0.githubusercontent.com/u/42282908?s=460&u=79ce909209ebf14da91a2d2517c9b0f9e378a4e1&v=4" width="100px;" alt=""/><br /><sub><b>Jadson Santos</b></sub></a><br /><a href="https://github.com/jadson179/PAINEL/commits?author=jadson179" title="Code">💻</a> <a href="https://github.com/jadson179" title="Design">🎨</a></td>
  <tr>
</table>
