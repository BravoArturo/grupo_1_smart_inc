const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

router.get('/', controller.add)
router.get('/:id', controller.edit)

module.exports = router
