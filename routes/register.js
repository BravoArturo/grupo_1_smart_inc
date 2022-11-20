const express = require('express')
const router = express.Router()
const controller = require('../controllers/registerControllers')

const path = require('path');
const multer = require('multer');

//middlewares
const validations = require('../middlewares/validateRegisterMiddleware');

//storage multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../public/images/users')
		cb(null, folder);
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

let avatarUpload = multer({ storage: storage })

//formulario de registro
router.get('/', controller.index)

//procesamiento del formulario de registro
router.post('/', avatarUpload.single('avatar'), validations, controller.processRegister)

module.exports = router