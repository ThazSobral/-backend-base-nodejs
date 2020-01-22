const socketio = require('socket.io')

let io
const connections = [] // Armazenar as conexoes

// O que faz quando cria-se uma conexao?
exports.setupWebsocket = (server) => {
  io = socketio(server)

  // Escuta evento de conexao
  io.on('connection', socket => {
    console.log(`Hi socket ${socket.id}`)
  })
}

// O que faz quando escuta-se uma alteracao
exports.sendMessage = (to, message, data) => { //usar "to" para mandar para connexoes especificas 
  // envia para todos as conexoes existentes
  connections.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}