# Desafio Técnico - Parte Back End - Tela Segura


Este repositório contém a implementação do Back End para um desafio técnico. O escopo do projeto envolve a criação de uma aplicação com uma tela segura acessível por no máximo uma pessoa.
Quando um usuário esta acessando a tela segura, a mesma tela fica bloqueada para os demais usuários.
Por ser a parte voltada para o servidor o foco deste repositório é a lógica do funcionamento e controle de acessos e tambem a comunicação com o banco de dados.
Para o controle de acesso da tela segura, monitoramento de usuários por pagina foi utilizado SocketIO e Node.js
Na parte de cadastro de usuário acesso login e salvamento de mensagens foi trabalhada com arquitetura MVC (Model, view e controller)
Na parte de ORM foi utilizado o sequelize e para o banco de dados usou-se o Postgres.
Com o auxilio do Docker e Postbird foi partimentado um BD e feito todo o desenvolvimento.

https://github.com/henriquedeantoni/desafio-front/assets/147777120/579b796f-b750-4744-a63c-7b2443154285

### Tecnologias Utilizadas

-   Node.js: Plataforma de execução de código JavaScript do lado do servidor.
-   Socket.IO: Biblioteca JavaScript para comunicação em tempo real entre clientes e servidores.
-   Express: Framework web para Node.js utilizado para construir APIs.
-   Sequelize: ORM (Object-Relational Mapping) para Node.js baseado em Promises.
-   PostgreSQL: Banco de dados relacional utilizado para armazenar dados.
-   Docker: Plataforma de software que fornece contêineres.
-   Postbird: Cliente PostgreSQL gráfico e de código aberto.
-   Insomnia: Teste API

### Funcionalidades Implementadas

-   Controle de Acesso: Monitoramento de usuários por página, utilizando WebSockets com Socket.IO.
-   Cadastro de Usuários: Implementação de um sistema de cadastro de usuários via REST
-   Salvamento de Mensagens: Sistema para salvar mensagens enviadas pelos usuários via REST

### Instalação e Execução

1.  Certifique-se de ter o Node.js instalado em sua máquina.
2.  Clone este repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
3.  Navegue até o diretório do projeto: `cd nome-do-repositorio`
4.  Inicialize o projeto npm: `npm init -y`
5.  Instale o Yarn globalmente: `npm install -g yarn`
6.  Adicione o framework Express: `yarn add express`
7.  Adicione o Nodemon como dependência de desenvolvimento: `yarn add nodemon -D`
8.  Adicione o Sucrase como dependência de desenvolvimento: `yarn add sucrase`
9.  Execute o servidor com Sucrase: `yarn sucrase-node src/server.js`
10. Adicione o Sequelize: `yarn add sequelize`
11. Adicione o Sequelize CLI como dependência de desenvolvimento: `yarn add sequelize-cli -D`
12. Adicione o PostgreSQL e o PG Hstore: `yarn add pg pg-hstore`
13. Crie a migração para a tabela de usuários: `yarn sequelize migration:create --name=create-users`
14. Crie a migração para a tabela de mensagens: `yarn sequelize migration:create --name=create-messages`
15. Execute as migrações para criar as tabelas no banco de dados: `yarn sequelize db:migrate`
16. Adicione a biblioteca UUID: `yarn add uuid`
17. Adicione a biblioteca Yup para validação de esquemas: `yarn add yup`
18. Adicione o middleware CORS: `yarn add cors`
19. Adicione o Socket.IO: `yarn add socket.io`
20.  Inicie o servidor: `yarn dev`
21.  O servidor estará disponível em `http://localhost:3001`.



## Imagens Desenvolvimento

Separadas algumas telas de desenvolvimento do Back end com algumas ferramentas (Insomnia, Docker e Postbird)
  <br>
  ![Tela_1](https://github.com/henriquedeantoni/desafio-back/assets/147777120/be1fcb30-2255-4626-9fb3-6ec2dde668aa)
  <br>
  <p style="font-size: 20px;">Tela de Insomnia (Envio mensagens)<p>
  <br>
  (https://github.com/henriquedeantoni/desafio-back/assets/147777120/bab070bf-98af-485d-9944-ded1d0c3d533)
  <br>
  <p style="font-size: 20px;">Tela de Insomnia método GET para receber todas as mensagens</p>
  <br>
  (https://github.com/henriquedeantoni/desafio-back/assets/147777120/e389b9c2-480d-4fb8-ab92-5edf16f5568f)
  <br>
  <p style="font-size: 20px;">Postbird</p> 
  <br>
  (https://github.com/henriquedeantoni/desafio-back/assets/147777120/b24dd6be-45d0-4887-8796-68ef5e3d65b3)
  <br>
  <p style="font-size: 20px;">Docker e a imagem do BD ( secure-chat)</p>
  <br>
  



