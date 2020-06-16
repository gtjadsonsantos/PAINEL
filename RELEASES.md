# RELEASES

## VERSÃO 1.0.0

* Criada Interface de gerenciamento do sistema
* Criada interface de visualização das salas
* Criação do README

## VERSÃO 1.0.1

* Adicionado bloqueio de requisiões de campos vazios
* Adicionado status da ação do usuário com a interface
* Adicionado bloqueio de funcionalidades administrativas para usuários de tipo comum
* Adicionado validação para não ter duplicação de usuários no banco com o mesmo `username` e `password`;
* Adicionado opção no menu da administração, para visualização do painel
* Criado arquivo de config da api do backend `PAINEL/frontend/src/config.js`
 
**Observação**: Se você fizer o provisinamento do banco de dados, pelo arquivo `provisioning.sql`, não clique no botão para provisionar o banco de dados
a ação irá duplicar o usuário administrador e assim o servidor irá para de funcionar;

- `solução de contorno`: excluir o registro adicional do usuário que foi duplicado

## VERSÃO 1.0.2

* Atualização da view quando realizada uma ação de upload de imagem ao servidor
* Informação de data e horário
* Cotação de moedas


## VERSÃO 1.0.3 

* Adicinado segunda view para conter mais andares no painel
* Estilizado as informação de horário, cotação do dolar
* `BUG`: Problema de servidor crachando.
* Adicionado campo para acesso a segunda view  do painel, na página admnistração. 
* Ajustado a interface para ser responsiva
* Criado aplicativo mobile

## VERSÃO 1.0.4

* Adicionado 5 view, a aplicação suporte `35` andares
* Adicionado funcionalidade de deletar uma sala
* Adicionado funcionalidade de deletar um usuário
* Provisionamento do banco de dados, quando o backend subir

## VERSÃO 1.0.5 

* Empacotamento da aplicação em container docker
* Att passo a passo pra uso da aplicação apartir do docker


## VERSÂO 1.0.6

* Criado documentação das rotas da api do backend
* Migrado banco de dados mysql para usar sqlite
* Inserido knex para gerenciamento das query's e conexões com o banco de dados
* Inserido autenticação das rotas com jwt
* Mensagem de interações conforme executado ações no sistema
* Layout
* Criação de aplicativo mobile


## VERSÂO 1.0.7

* Update Interface web.

## VERSÃO 1.0.9

**BACKEND**
* Refatoração do backend
* * Armazenamento das imagens de previsão do tempo no backend do painel
* * Melhorias nos controllers
* * Leitura de variáveis de ambiente caso existam 

**FRONTEND**
* Funcionaliade para gestão de andares
* Refatoração do frontend
* * Alterado endereço das imagens da api de previsão do tempo, para pegar na propria aplicação
* * Retirado a responsabilidade do componente administração gerenciar/manter o estado do menu, foi incluido o redux para o mesmo
* Funcionalidade para mudar a cor da aplicação




  useEffect(() => {
    /* https://developer.yahoo.com/weather/documentation.html#oauth-nodejs */
    function getDada() {

      const header = {
        "X-Yahoo-App-Id": config.weather.appID,
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type"
      };

      const request = new OAuth.OAuth(
        null,
        null,
        config.weather.clientID,
        config.weather.clientSecret,
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
      );

      request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=florianópolis&u=c&format=json',
        null,
        null,
        function (err, data, result) {
          if (err) {
            console.log(err);
          } else {
            const { forecasts } = JSON.parse(data)
            const state = []

            forecasts.forEach(item => {

              switch (item.day) {
                case "Mon":
                  state.push({ code: item.code, day: "Segunda" })
                  break;
                case "Tue":
                  state.push({ code: item.code, day: "Terça" })
                  break;
                case "Wed":
                  state.push({ code: item.code, day: "Quarta" })
                  break;
                case "Thu":
                  state.push({ code: item.code, day: "Quinta" })
                  break;
                case "Fri":
                  state.push({ code: item.code, day: "Sexta" })
                  break;
                case "Sat":
                  state.push({ code: item.code, day: "Sábado" })
                  break;
                case "Sun":
                  state.push({ code: item.code, day: "Domingo" })
                  break;
                default:
                  break;
              }

            });

            setWeather(state)

          }
        }
      );
    }
    getDada()
  }, [update])