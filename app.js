const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, '/public')
const routerLogin = require('./routes/loginRoute')
const routeIndex = require('./routes/index')
const routeShoppingCar = require('./routes/shoppingCar')
const routeProduct = require('./routes/product')

app.set('view engine', 'ejs')
app.use(express.static(publicPath))
app.use('/login-mobil', routerLogin)
app.use('/product', routeProduct)
app.use('/', routeIndex)
app.use('/shoppingCar', routeShoppingCar)

app.listen(3000, () => {
  console.log('Servidor OK en puerto', 'http://localhost:3000')
})
