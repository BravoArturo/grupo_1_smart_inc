const express = require('express')
const path = require('path')
const app = express()
const methodOVerride = require('method-override')
const publicPath = path.join(__dirname, '/public')
const routerLogin = require('./routes/loginRoute')
const routeIndex = require('./routes/index')
const routeShoppingCar = require('./routes/shoppingCar')
const routeProduct = require('./routes/product')
const routeRegister = require('./routes/register')

app.set('view engine', 'ejs')
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOVerride('_method'))

app.use('/login', routerLogin)
app.use('/product', routeProduct)
app.use('/', routeIndex)
app.use('/shoppingCar', routeShoppingCar)
app.use('/register', routeRegister)
//testttt
app.use((req, res, next) => {
  res.status(404).render('notFound')
  next()
})
app.listen(3000, () => {
  console.log('Servidor OK en puerto', 'http://localhost:3000')
})
