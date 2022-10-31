const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, '/public')
const routerLogin = require('./routes/loginRoute')
const routeIndex = require('./routes/index')
const routeShoppingCar = require('./routes/shoppingCar')

const routeProductDetail = require('./routes/productDetail')

const routeProduct = require('./routes/product')
const routeRegister = require('./routes/register')

app.set('view engine', 'ejs')
app.use(express.static(publicPath))
app.use('/login-mobil', routerLogin)
app.use('/product', routeProduct)
app.use('/', routeIndex)
app.use('/shoppingCar', routeShoppingCar)
app.use('/productDetail', routeProductDetail)
app.use('/register', routeRegister)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(3000, () => {
  console.log('Servidor OK en puerto', 'http://localhost:3000')
})
