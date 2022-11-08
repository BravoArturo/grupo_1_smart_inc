const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

router.get('/', controller.index)
router.get('/create', controller.add)
router.post('/', controller.store)
router.get('/:id', controller.productDetail)
router.get('/:id/edit', controller.edit)
router.put('/:id', controller.put)
// router.delete('/:id', controller.delete)

module.exports = router
