const fs = require('fs')
const path = require('path')
const productsPath = path.join(__dirname, '../data/products.json')
const fileName = './data/products.json'
const controller = {
  index: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    res.render('products', {
      products,
    })
  },
  add: (req, res) => {
    res.render('editAddProduct')
  },
  edit: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    let productsToUpdate = products.filter((prod) => prod.id == req.params.id)
    console.log(productsToUpdate[0])
    res.render('editAddProduct', {
      id: req.params.id,
      product: productsToUpdate[0],
    })
  },
  productDetail: (req, res) => {
    res.render('productDetail')
  },
  store: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    req.body.id = products[products.length - 1].id + 1
    if (req.file) {
      req.body.image = req.file.destination
    }
    products.push(JSON.parse(JSON.stringify(req.body)))
    fs.writeFileSync(fileName, JSON.stringify(products, null, ''))
    res.redirect('/products')
  },
  put: (req, res) => {
    console.log(req.body)
    res.redirect('/products')
  },
  delete: (req, res) => {
    console.log('req delete', req.params.id)
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    let productsFiltered = products.filter((prod) => prod.id != req.params.id)
    fs.writeFileSync(fileName, JSON.stringify(productsFiltered, null, ''))
    res.redirect('/products')
  },
}

module.exports = controller
