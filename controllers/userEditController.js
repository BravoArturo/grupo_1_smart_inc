const path = require('path')

const userEditController = {
index: (req, res) => {
    res.render('UserEditForm')
},
}

module.exports = userEditController