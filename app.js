const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, '/public')

const routeIndex = require('./routes/index')
const routeShoppingCar = require('./routes/shoppingCar')

app.use(express.static(publicPath))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('Servidor OK en puerto','http://localhost:3000')
})

// DESCOMENTAR LÍNEAS 16-19 SI NO FUNCIONA EL .use DE LAS LÍNEAS 31-32
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/login.html'))
});

// DESCOMENTAR LÍNEAS 26-28 SI NO FUNCIONA EL .use DE LAS LÍNEAS 31-32
// app.get('/shoppingCar',(req,res)=>{
//   res.sendFile(path.join(__dirname,'/views/shoppingCar.html'))
// });


app.use('/', routeIndex)
app.use('/shoppingCar', routeShoppingCar)



