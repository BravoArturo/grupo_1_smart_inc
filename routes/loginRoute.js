const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginController')

//Formulario de login
router.get('/', controller.index)

// Procesar el login
router.post('/login', controller.loginProcess);

module.exports = router