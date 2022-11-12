const express = require('express')
const path = require('path')
const app = express()
const methodOVerride = require('method-override')
const publicPath = path.join(__dirname, '/public')
const routerLogin = require('./routes/loginRoute')
const routeIndex = require('./routes/index')
const routeShoppingCar = require('./routes/shoppingCar')
const routeProductDetail = require('./routes/productDetail')
const routeProduct = require('./routes/product')
const routeRegister = require('./routes/register')
const routerUserEdit = require('./routes/userEdit')// linea de editar usuario
const routerUserCreate = require('./routes/userCreate')
const { route } = require('./routes/register')

app.set('view engine', 'ejs')
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOVerride('_method'))
app.use('/login', routerLogin)  //DFCH9503 cambié de login-mobil a mobil para que el vínculo funcione
app.use('/product', routeProduct)
app.use('/', routeIndex)
app.use('/shoppingCar', routeShoppingCar)
app.use('/productDetail', routeProductDetail)
app.use('/register', routeRegister)
app.use('/userEditForm',routerUserEdit ) // linea intentando agregar ruta 
app.use('/userCreateForm', routerUserCreate)
app.use((re, res, next) => {
  res.status(404).render('notFound')
})
app.listen(3000, () => {
  console.log('Servidor OK en puerto', 'http://localhost:3000')
})
