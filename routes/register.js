const express = require('express')
const router = express.Router()
const controller = require('../controllers/registerControllers')

//middlewares
const validations = require('../middlewares/validateRegisterMiddleware');

//formulario de registro
router.get('/', controller.index)

//procesamiento del formulario de registro
router.post('/', validations, controller.processRegister)

module.exports = router