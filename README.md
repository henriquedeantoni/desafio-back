# Desafio Técnico - Parte Back End - Tela Segura


Este repositório contém a implementação do Back End para um desafio técnico. O escopo do projeto envolve a criação de uma aplicação com uma tela segura acessível por no máximo uma pessoa.
Quando um usuário esta acessando a tela segura, a mesma tela fica bloqueada para os demais usuários.
Por ser a parte voltada para o servidor o foco deste repositório é a lógica do funcionamento e controle de acessos e tambem a comunicação com o banco de dados.
Para o controle de acesso da tela segura, monitoramento de usuários por pagina foi utilizado SocketIO e Node.js
Na parte de cadastro de usuário acesso login e salvamento de mensagens foi trabalhada com arquitetura MVC (Model, view e controller)
Na parte de ORM foi utilizado o sequelize e para o banco de dados usou-se o Postgres.
Com o auxilio do Docker e Postbird foi partimentado um BD e feito todo o desenvolvimento.


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




