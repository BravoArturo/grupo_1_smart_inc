const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, '/public')
const routeShoppingCar = require('./routes/shoppingCar')

app.use(express.static(publicPath))
app.set('view engine', 'ejs')
app.use('/shoppingCar', routeShoppingCar)

app.listen(3000, () => {
  console.log('Servidor OK en puerto 3000')
})
