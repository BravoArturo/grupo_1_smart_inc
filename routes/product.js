const express = require('express')
const router = express.Router()
const path = require('path')
const controller = require('../controllers/productController')
const multer = require('multer')

let multerDiskStorage = multer.diskStorage({
  destination: (req, res, callback) => {
    let folder = path.join(__dirname, '../public/images/product')
    callback(null, folder)
  },
  filename: (req, file, callback) => {
    let fileName = Date.now() + path.extname(file.originalname)
    callback(null, fileName)
  },
})

let fileUpload = multer({ storage: multerDiskStorage })
router.get('/', controller.index)
router.get('/create', controller.add)
router.post('/', fileUpload.single('productImage'), controller.store)
router.get('/:id', controller.productDetail)
router.get('/:id/edit', controller.edit)
router.put('/:id', controller.put)
// router.delete('/:id', controller.delete)

module.exports = router
