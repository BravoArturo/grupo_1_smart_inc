const path = require('path')

const publicPath = path.join(__dirname, '/public')

const controller = {
  index: (req, res) => {
    res.render('login')
  },
}

module.exports = controller