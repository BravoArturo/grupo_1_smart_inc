const { body } = require('express-validator')
const path = require('path')

const validations = [
  body('fullName').notEmpty().withMessage('Tiene que escribir un nombre'),
  body('userName')
    .notEmpty()
    .withMessage('Tiene que escribir un nombre de usuari@'),
  body('email')
    .notEmpty()
    .withMessage('Tiene que escribir un correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Debe escribir un formato de email válido'),
  body('password').notEmpty().withMessage('Tiene que escribir una contraseña'),
  body('avatar').custom((value, { req }) => {
    let file = req.file
    let acceptedExtensions = ['.jpg', '.png', '.gif']

    if (!file) {
      throw new Error('Tiene que subir una imagen')
    } else {
      let fileExtension = path.extname(file.originalname)
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ', ',
          )}`,
        )
      }
    }

    return true
  }),
]

module.exports = validations
