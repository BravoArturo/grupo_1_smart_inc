const path = require('path')
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const User = require('../models/User')

const registerController = {
  index: (req, res) => {
    res.render('register', {
      user: req.session.user
        ? req.session.user
        : {
            id: '',
            name: '',
            description: '',
            image: '',
            category: '',
            price: '',
            direction: '',
          },
    })
  },
  processRegister: (req, res) => {
    const resultValidation = validationResult(req)
    // const errorsConsole=resultValidation.mapped();
    // console.log(errorsConsole);
    // console.log(resultValidation);
    // console.log(req.body);
    console.log('ERRORES', resultValidation.errors)
    if (resultValidation.errors.length > 0) {
      fs.unlinkSync(req.file.path)
      return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body,
        user: req.session.user
          ? req.session.user
          : {
              id: '',
              fullName: '',
              userName: '',
              email: '',
              password: '',
              avatar: '',
              category: '',
              direction: '',
            },
      })
    }

    let userInDBbyEmail = User.findByField('email', req.body.email)
    let userInDBbyUserName = User.findByField('userName', req.body.userName)

    if (userInDBbyEmail) {
      return res.render('register', {
        user: req.session.user
          ? req.session.user
          : {
              id: '',
              fullName: '',
              userName: '',
              email: '',
              password: '',
              avatar: '',
              category: '',
              direction: '',
            },
        errors: {
          email: {
            msg: 'Este email ya está registrado',
          },
        },
        oldData: req.body,
      })
    }

    if (userInDBbyUserName) {
      return res.render('register', {
        user: req.session.user
          ? req.session.user
          : {
              id: '',
              fullName: '',
              userName: '',
              email: '',
              password: '',
              avatar: '',
              category: '',
              direction: '',
            },
        errors: {
          userName: {
            msg: 'Este nombre de usuario ya está registrado',
          },
        },
        oldData: req.body,
      })
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 12),
      avatar: '/images/users/' + req.file.filename,
      category: 'Cliente',
    }
    let userCreated = User.create(userToCreate)

    return res.redirect('/login')
  },
}

module.exports = registerController
