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