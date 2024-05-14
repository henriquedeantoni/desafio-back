import './database'

import cors from 'cors'
import express from 'express'
import http from 'http' // Importe o módulo http do Node.js
import { Server } from 'socket.io'

import routes from '../src/routes/routes'

class App {
  constructor() {
    this.app = express()
    this.server = http.createServer(this.app) // Crie um servidor HTTP usando o Express
    this.io = new Server(this.server, {
      path: "/main/socket.io", // Especificando o caminho aqui
      cors: {
        origin: [
          "http://localhost:5173",
          "http://localhost:5173/Main",
          "http://localhost:5173/main",
          "http://localhost:3001"
        ],
        methods: ["GET", "POST"],
      },
    });

    this.safeScreenIo = new Server(this.server, {
      path: "/safe-screen/socket.io", // Caminho para a tela de safe-screen
      cors: {
        origin: [
          "http://localhost:5173",
          "http://localhost:5173/Main",
          "http://localhost:5173/main",
          "http://localhost:3001"
        ],
        methods: ["GET", "POST"],
      },
    });

    this.activeUsers = new Set();
    this.socketToUsername = {};
    this.activeSafeScreenUsers = new Set();

    this.middlewares()
    this.routes()
    this.setupSocket()
    this.setupSafeScreenSocket(); // Adiciona a configuração para o socket da tela de safe-screen
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      cors({
        origin: 'http://localhost:5173', // Só permite requisições deste origin
      }),
    )
  }


  routes() {
    this.app.use(routes)
  }

  setupSocket() {
    console.log("Socket.IO inicializado  !");
    const self = this; // Capturando a referência da instância da classe para usar dentro do callback

    this.io.on("connection", (socket) => {
      console.log("Novo usuário conectado:", socket.id);
      
      socket.on('newUser', (userData) => {
        console.log('Novo usuário:', userData);
        this.socketToUsername[socket.id] = userData;
        this.activeUsers.add(userData);
        this.io.emit("updateActiveUsers", Array.from(this.activeUsers));
      });

      // Lidando com a desconexão do usuário
      socket.on("disconnect", () => {
        console.log("Usuário desconectado:", socket.id);
        const disconnectedUsername = self.socketToUsername[socket.id];
        if (disconnectedUsername) {
          // Remove o usuário da lista de ativos
          self.activeUsers.delete(disconnectedUsername);
          // Remove o mapeamento socket.id -> username
          delete self.socketToUsername[socket.id];
          // Emitindo a lista atualizada de usuários ativos para todos os clientes
          self.io.emit("updateActiveUsers", Array.from(self.activeUsers));
        }
      });
    });
  }

  setupSafeScreenSocket() {
    console.log("Socket.IO da tela de safe-screen inicializado!");
    
    this.safeScreenIo.on("connection", (socket) => {
      console.log("Novo usuário conectado na tela de safe-screen:", socket.id);
      
      // Verificar se a sala está cheia
      if (this.activeSafeScreenUsers.size >= 1) {
        console.log("Sala cheia. Recusando conexão...");
        socket.emit("roomFull");
        socket.disconnect(true);
        return;
      }
  
      // Adicionar usuário à lista de usuários ativos
      this.activeSafeScreenUsers.add(socket.id);
  
      // Capturar evento de desconexão
      socket.on("disconnect", () => {
        console.log("Usuário desconectado da tela de safe-screen:", socket.id);
        // Remover usuário da lista de usuários ativos
        this.activeSafeScreenUsers.delete(socket.id);
      });
    });
  }

  start() {
    this.server.listen(3001, () => {
      console.log("Servidor está ouvindo na porta 3001");
    });
  }
}

export default new App()