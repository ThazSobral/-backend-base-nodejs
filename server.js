const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  { useNewUrlParser: true,
  useUnifiedTopology: true }
)
requireDir('./src/models')
const Product = mongoose.model('Product')

// Rotas
app.get('/',(req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with',
    url: 'http://github.com/facebook/react'
  })
  return res.send('Hello')
})

app.listen(3001)