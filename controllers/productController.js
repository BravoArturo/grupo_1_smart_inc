const { response } = require("express")
const { Products } = require('../env/products')

const controller = {
  add: (req, res) => {
    res.render('editAddProduct', { id: null })
  },
  edit: (req, res) => {
    res.render('editAddProduct', { id: req.params.id })
  }, 
  products: (req, res = response) => {
    res.json(Products)
  }
}

module.exports = controller
