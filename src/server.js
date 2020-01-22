const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')

const { setupWebsocket } = require('./websocket')
const routes = require('./routes')


// Iniciando o App
const app = express()
const server = http.Server(app) // Extraindo o http do app

setupWebsocket(server) //Aplicando o http no socketio

app.use(express.json()) // Padronizando comunição com json

app.use(cors(
  // Abertura de excessao
  // {origin: 'http://localhost:3333'}
))

// Iniciando o DB
//Conexao remota
// mongoose.connect( "mongodb+srv://<user>:<password>@cluster0-z6wvt.mongodb.net/test?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true 
// })
//Conexao local
mongoose.connect( "mongodb://localhost:27017/nodeapi",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(routes) // Utilizando Rotas no app

app.listen(3001, () => {
  console.log(`Server in http://localhost:3001`)
}) // Escutando porta 3001