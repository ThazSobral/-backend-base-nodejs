const Product = require('../models/Product')
const { sendMessage } = require('../websocket')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const product = await Product.paginate({}, { page, limit: 10 })

    return res.json(product)
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  },

  async store(req, res) {
    let product = await Product.findOne({ title: req.body.title })

    if (!product) {
      product = await Product.create(req.body)

      sendMessage('', 'new-product', product)
    }
    
    return res.json(product)
  },

  async update(req, res) {
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    return res.json(product)
  },

  async destroy(req, res) {
    await Product.findOneAndDelete({_id: req.params.id})
    return res.send()
  }
}