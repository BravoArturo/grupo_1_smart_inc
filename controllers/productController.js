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
    console.log(req.params.id)
    res.render('editAddProduct', { id: req.params.id })
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
    res.redirect('/products', {
      products: [
        {
          imgSource: '/images/product/SMART-TV-1.jpg',
          name: 'QLED TV',
          price: 5000,
        },
      ],
    })
  },
  delete: (req, res) => {
    console.log('req delete', req)
    res.redirect('/products', {
      products: [
        {
          imgSource: '/images/product/SMART-TV-1.jpg',
          name: 'QLED TV',
          price: 5000,
        },
      ],
    })
  },
}

module.exports = controller
