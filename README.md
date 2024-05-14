# Tela Segura


Este repositório contém a implementação do Back End para um desafio técnico. O escopo do projeto envolve a criação de uma aplicação com uma tela segura acessível por no máximo uma pessoa.
Quando uma pessoa esta acessando a tela segura ela fica bloqueada para os demais usuários.
Por ser a parte voltada para o servidor o foco deste repositório é a lógica do funcionamento e controle de acessos.
Para o controle de acesso da tela segura, monitoramento de usuários por pagina foi utilizada com websocket, mais precisamente com atecnologia SocketIO e Node.js
Na parte de cadastro de usuário acesso login e salvamento de mensagens foi trabalhada com MVC (Model, view e controller)
Na parte de ORM foi utilizado o sequelize e o banco de dados usou-se o Postgres.
Com o auxilio do Docker e Postbird foi partimentado um BD e feito todo o desenvolvimento.

Desafio Técnico - Parte Back End
--------------------------------

Este repositório contém a implementação do Back End para um desafio técnico. O escopo do projeto envolve a criação de uma aplicação com uma tela segura acessível por no máximo uma pessoa.

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
4.  Instale as dependências do projeto: `npm install`
5.  Configure as variáveis de ambiente no arquivo `.env`.
6.  Inicie o servidor: `npm start`
7.  O servidor estará disponível em `http://localhost:3001`.






## Telas

A aplicação é formada por 4 telas: Cadastro, Login, Main e Tela-segura. Esta ultima pode ficar sem acesso quando tem 1 usuário acessando.

  ![tela_1](https://github.com/henriquedeantoni/desafio-front/assets/147777120/b64f2fd2-3959-4972-a803-3853849ec2ce)
  <br>
  <p style="font-size: 20px;">Tela de Cadastro<p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/3a1f7fbe-7b2f-4a0c-85d0-5e9b1e75ffc6)
  <br>
  <p style="font-size: 20px;">Tela de Login</p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/9e1e41d8-1f0b-41fe-9f2a-969492b5b731)
  <br>
  <p style="font-size: 20px;">Tela Principal</p> 
  (1) - Lista de usuários presentes na tela <br>
  (2) - Ultimas mensagens <br>
  (3) - Botão para tela segura <br>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/ccb92097-16b1-409c-b94f-120619f47930)
  <br>
  <p style="font-size: 20px;">Tela Segura</p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/e684add4-e33f-4cc0-8d78-06a50b729ed9)
  <br>
  <p style="font-size: 20px;">Tela Segura (Bloqueada)</p>


## Funcionalidades

As principais funcionalidades são depois do cadastro e login
- Funcionalidade 1: listagem de usuários (ver figura tela principal)
      Todos os usuários presentes na tela principal aparecem com seu username na caixa de Usuários Online, quando algum usuário sai a lista diminui.
      Quando alguem entra,  lista aumenta
- Funcionalidade 2: listagem de mensagens (ver figura tela principal)
      Todas as mensagens são listadas na caixa de mensagens
- Funcionalidade 3: Botão acesso tela segura (ver figura tela principal)
      Botão para acesso da tela segura, a tela segura permite apenas um usuário, portanto será bloqueada para os demais quando acessada por alguem
- Funcionalidade 4: Salvar a Mensagem (ver figura tela segura)
      Quando alguem esta na tela segura esta livre para fazer qualquer ação, por isso incluida a opção de salvar mensagem
- Funcionalidade 5: Bloqueio de tela (ver figura tela segura bloqueada)
      Quando alguem esta na tela principal e quer acessar a tela segura com alguem a ocupando cairá numa tela de bloqueio.

## Roteiro de Instalação


1) Instalação do Yarn globalmente
<br>
  npm install --global yarn
<br>
<br>
2) Criação do Projeto com Vite:
<br>
  yarn create vite
<br>
<br>
3) Instalação do React Router DOM:
<br>
<br>
  yarn add react-router-dom
<br>
<br>
4) Instalação do React Hook Use Form:
<br>
<br>
  yarn add react-hook-use-form
<br>
<br>
5) Instalação do React Hook Form:
<br>
<br>
  yarn add react-hook-form
<br>
<br>
6) Instalação do Axios:
<br>
<br>
  yarn add axios
<br>
<br>
7) Instalação do Socket.IO Client:
<br>
<br>
  yarn add socket.io-client


npm init -y <br>
npm install -g yarn <br>
Yarn add express <br>
yarn add nodemon -D <br>
yarn add sucrase <br>
yarn sucrase-node src/server.js <br>
yarn add sequelize <br>
yarn add sequelize-cli -D <br>
yarn add pg pg-hstore <br>
yarn sequelize migration:create --name=create-users <br>
yarn sequelize migration:create --name=create-messages <br>
yarn sequelize db:migrate <br>
yarn add uuid <br>

yarn add yup <br>
yarn add cors <br>
yarn add socket.io <br>

