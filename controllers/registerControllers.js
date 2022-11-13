const path = require('path')
const { validationResult } = require('express-validator');

const registerController = {
index: (req, res) => {
    res.render('register')
},
// store: (req, res) => {
//     if (req.file) {
//         console.log(req.file)
//     }
//     console.log(req.body)
//     res.redirect('/')
// },
store:  (req, res) => {
    const resultValidation = validationResult(req);
    
    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

    return res.send('Ok, las validaciones se pasaron y no tienes errores');
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