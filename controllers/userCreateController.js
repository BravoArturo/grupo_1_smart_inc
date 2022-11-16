const path = require('path')

const userCreateController = {
index: (req, res) => {
    res.render('UserCreateForm')
},
}

module.exports = userCreateController