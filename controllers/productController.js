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

      user: req.session.user
        ? req.session.user
        : {
            id: '',
            fullName: '',
            userName: '',
            email: '',
            password: '',
            avatar: '',
            category: '',
            direction: '',
          },
    })
  },
  add: (req, res) => {
    res.render('editAddProduct', {
      user: req.session.user
        ? req.session.user
        : {
            id: '',
            fullName: '',
            userName: '',
            email: '',
            password: '',
            avatar: '',
            category: '',
            direction: '',
          },
    })
  },
  edit: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    let productsToUpdate = products.filter((prod) => prod.id == req.params.id)
    // console.log(productsToUpdate[0])
    res.render('editAddProduct', {
      id: req.params.id,
      product: productsToUpdate[0],
      user: req.session.user
        ? req.session.user
        : {
            id: '',
            fullName: '',
            userName: '',
            email: '',
            password: '',
            avatar: '',
            category: '',
            direction: '',
          },
    })
  },
  productDetail: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    let productsToUpdate = products.filter((prod) => prod.id == req.params.id)
    // console.log(productsToUpdate[0])
    res.render('productDetail', {
      product: productsToUpdate[0],
      user: req.session.user
        ? req.session.user
        : {
            id: '',
            fullName: '',
            userName: '',
            email: '',
            password: '',
            avatar: '',
            category: '',
            direction: '',
          },
    })
  },
  store: (req, res) => {
    // console.log(req.body)
    req.body.price = req.body.price + ' USD'
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    req.body.id = products[products.length - 1].id + 1
    if (req.file) {
      req.body.image = '/images/product/' + req.file.filename
    }
    products.push(JSON.parse(JSON.stringify(req.body)))
    fs.writeFileSync(fileName, JSON.stringify(products, null, ' '))
    res.redirect('/products')
  },
  put: (req, res) => {
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    const id = req.params.id
    const productToEdit = products.find((prod) => prod.id == id)
    const editProduct = {
      id: id,
      name: req.body.name,
      description: req.body.description,
      image: req.file
        ? '/images/product/' + req.file.filename
        : productToEdit.image,
      category: req.body.category,
      price: req.body.price,
    }
    products.forEach((prod, index) => {
      if (prod.id == id) {
        products[index] = editProduct
      }
    })
    fs.writeFileSync(fileName, JSON.stringify(products, null, ' '))
    res.redirect('/products')
  },
  delete: (req, res) => {
    console.log('req delete', req.params.id)
    let products = fs.readFileSync(productsPath, 'utf-8')
    products = JSON.parse(products)
    let productsFiltered = products.filter((prod) => prod.id != req.params.id)
    fs.writeFileSync(fileName, JSON.stringify(productsFiltered, null, ' '))
    res.redirect('/products')
  },
}

module.exports = controller
