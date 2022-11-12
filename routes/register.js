const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const controller = require('../controllers/registerControllers')

router.get('/', controller.index)


let multerDiskStorage = multer.diskStorage({
    destination: (req, res, callback) => {
        let folder = path.join(__dirname, '../public/images/users')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let fileName = Date.now() + path.extname(file.originalname)
        callback(null, fileName)
    },
})

let fileUpload = multer({ storage: multerDiskStorage })
router.get('/', controller.index)
router.post('/', fileUpload.single('userImage'), controller.store)
router.get('/:id/edit', controller.edit)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router
