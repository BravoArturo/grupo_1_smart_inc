const controller = {
  add: (req, res) => {
    res.render('editAddProduct', { id: null })
  },
  edit: (req, res) => {
    res.render('editAddProduct', { id: req.params.id })
  },
}

module.exports = controller
