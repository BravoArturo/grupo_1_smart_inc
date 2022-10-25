const path = require('path')

const publicPath = path.join(__dirname, '/public')

const controller = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
  },
}

module.exports = controller