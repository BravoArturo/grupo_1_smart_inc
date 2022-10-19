const path = require('path')

const publicPath = path.join(__dirname, '/public')

const controller = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/shoppingCar.html'))
  },
}

module.exports = controller
