const express =  require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/', (req, res) => {
  ProductController.index(req, res)
})

module.exports = routes