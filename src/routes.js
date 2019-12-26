const express =  require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/', ProductController.index)
routes.get('/:id', ProductController.show)
routes.post('/', ProductController.store)
routes.put('/:id', ProductController.update)
routes.delete('/:id', ProductController.destroy)

module.exports = routes