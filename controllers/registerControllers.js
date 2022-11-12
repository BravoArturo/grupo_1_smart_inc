const path = require('path')

const registerController = {
index: (req, res) => {
    res.render('register')
},
store: (req, res) => {
    if (req.file) {
        console.log(req.file)
    }
    console.log(req.body)
    res.redirect('/')
},
edit: (req, res) => {
    console.log(req.params.id)
    res.render('editAddProduct', { id: req.params.id }) //REVISAR LA RENDERIZACIÓN
},
put: (req, res) => {
    console.log(req.body)
    res.redirect('/')
},
delete: (req, res) => {
    console.log('req delete', req.params.id)
    res.redirect('/')
},
}

module.exports = registerController