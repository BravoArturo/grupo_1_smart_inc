const express = require ('express')
const router = express.Router()

const productDetailControllers = require ('../controllers/productDetailControllers')

router.get ('/', productDetailControllers.index)

module.exports = router