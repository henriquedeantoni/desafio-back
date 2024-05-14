const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  path: "/main/socket.io" 
});
// Array para armazenar os usuários ativos
let activeUsers = new Set();

console.log('activeUsers: ' + activeUsers)

let socketToUsername = {};

io.on('connection', (socket) => {
    console.log('Usuário conectado:', socket.id);

    // Quando um usuário se conecta, adiciona-o à lista de usuários ativos
    socket.on('newUser', (userData) => {
        console.log('Novo usuário:', userData);
        // Adiciona o mapeamento socket.id -> username
        socketToUsername[socket.id] = userData;
        activeUsers.add(userData);
        // Informa a todos os clientes a lista atualizada de usuários ativos
        io.emit('updateActiveUsers', Array.from(activeUsers));
    });

    
    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
        // Obtém o username do usuário desconectado usando o mapeamento socket.id -> username
        const disconnectedUser = socketToUsername[socket.id];
        if (disconnectedUser) {
            // Remove o usuário da lista de usuários ativos
            activeUsers.delete(disconnectedUser);
            // Remove o mapeamento socket.id -> username
            delete socketToUsername[socket.id];
            // Informa a todos os clientes a lista atualizada de usuários ativos
            io.emit('updateActiveUsers', Array.from(activeUsers));
        }
    });
});


httpServer.listen(3001, () => {
  console.log("Servidor está ouvindo na porta 3001");
});



