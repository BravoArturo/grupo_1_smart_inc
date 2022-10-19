const express = require('express')
const router = express.Router()
const controller = require('../controllers/shoppingCarController')

router.get('/', controller.index)

module.exports = router
