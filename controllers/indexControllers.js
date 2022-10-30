const path = require('path')

const indexController = {
  index: (req, res) => {
    res.render('index')
  },
}

module.exports = indexController
