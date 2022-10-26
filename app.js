const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, '/public')
const routeShoppingCar = require('./routes/shoppingCar')

app.use(express.static(publicPath))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('Servidor OK en puerto 3000')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.use('/shoppingCar', routeShoppingCar)
