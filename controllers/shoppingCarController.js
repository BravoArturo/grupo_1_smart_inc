const path = require('path')

// const controller = {
//   index: (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/shoppingCar.html'))
//   },
// }

const productos = [
  {
    imgSource: '/images/descarga(1).jfif',
    description: 'descripción',
    price: 5000,
  },
  {
    imgSource: '/images/descarga.jfif',
    description: 'descripción',
    price: 5000,
  },
  {
    imgSource: '/images/images.jfif',
    description: 'descripción',
    price: 5000,
  },
]
const controller = {
  index: (req, res) => {
    res.render('shoppingCar', { productos: productos })
  },
  bienvenido: (req, res) => {
    res.render('index')
  },
}

module.exports = controller
