const path = require('path')

// const controller = {
//   index: (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/shoppingCar.html'))
//   },
// }

const productos = [
  {
    imgSource: '/images/descarga(1).jfif',
    description: 'HOLA BRIAN',
    price: 5000,
  },
  {
    imgSource: '/images/descarga.jfif',
    description: 'boca juniors',
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
}

module.exports = controller
