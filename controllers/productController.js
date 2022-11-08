const controller = {
  index: (req, res) => {
    res.render('products')
  },
  add: (req, res) => {
    res.render('editAddProduct', { id: null })
  },
  edit: (req, res) => {
    console.log(req.params.id)
    res.render('editAddProduct', { id: req.params.id })
  },
  productDetail: (req, res) => {
    res.render('productDetail')
  },
  store: (req, res) => {
    console.log(req.body)
    res.redirect('/products')
  },
  put: (req, res) => {
    console.log(req.body)
    //res.redirect('/products')
  },
  // delete: (req, res) => {
  //   res.redirect('/products')
  // },
}

module.exports = controller
