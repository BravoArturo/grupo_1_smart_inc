const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const controller = require('../controllers/registerControllers')
const { body } = require('express-validator');

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


// VALIDACIONES

const validations = [
	body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('user').notEmpty().withMessage('Tienes que escribir un nombre de usuari@'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

router.get('/', controller.index)
router.post('/', fileUpload.single('avatar'), validations, controller.store)
router.get('/:id/edit', controller.edit)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router
