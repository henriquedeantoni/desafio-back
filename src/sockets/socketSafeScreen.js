const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  path: "/safe-screen/socket.io" // Caminho específico para os endpoints do socket.io
});

// Usuário ativo na sala

const activeSafeScreenUsers = new Set();

io.on('connection', (socket) => {
  console.log('Usuário conectado à tela de safe-screen:', socket.id);

  // Verificar se a sala está cheia
  if (activeSafeScreenUsers.size >= 1) {
    // Sala cheia, recusar conexão
    socket.emit('roomFull');
    socket.disconnect(true);
    return;
  }

  // A sala está vazia, permitir conexão
  activeSafeScreenUsers.add(socket.id);

  // Capturar o evento de desconexão
  socket.on('disconnect', () => {
    console.log('Usuário desconectado da tela de safe-screen:', socket.id);
    // Remover usuário da lista de usuários ativos
    activeSafeScreenUsers.delete(socket.id);
  });
});

server.listen(3001, () => {
  console.log("Servidor está ouvindo na porta 3001");
});