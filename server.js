const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect(
  "mongodb+srv://user:user@cluster0-gt40f.mongodb.net/test?retryWrites=true&w=majority",
  { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
  }
)
requireDir('./src/models')

// Rotas
app.get('/',(req, res) => {
  res.send('Hello')
})

app.listen(3001)