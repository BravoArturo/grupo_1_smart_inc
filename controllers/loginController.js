const path = require('path')
const bcryptjs = require('bcryptjs')
const User = require('../models/User')

const publicPath = path.join(__dirname, '/public')

const controller = {
  index: (req, res) => {
    res.render('login')
  },
  loginProcess: (req, res) => {
    let userToLogin = User.findByField('email', req.body.emailOrUserName)
    let userToLoginByUserName = User.findByField(
      'userName',
      req.body.emailOrUserName,
    )

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password,
      )
      if (isOkThePassword) {
        // delete userToLogin.password;
        // req.session.userLogged = userToLogin;

        // if(req.body.remember_user) {
        // 	res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
        // }

        // return res.redirect('/user/profile');
        console.log('la contraseña es válida por email')
        req.session.user = userToLogin
        return res.status(200).send(req.session.user)
      }
    } else if (userToLoginByUserName) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLoginByUserName.password,
      )
      if (isOkThePassword) {
        // delete userToLogin.password;
        // req.session.userLogged = userToLogin;

        // if(req.body.remember_user) {
        // 	res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
        // }

        req.session.user = userToLoginByUserName
        // return res.redirect('/user/profile');
        console.log('la contraseña es válida por userName')
        return res.status(200).send(req.session.user)
      }
      // return res.render('login', {
      // 	errors: {
      // 		email: {
      // 			msg: 'Las credenciales son inválidas'
      // 		}
      // 	}
      // });
      return res.send('credenciales inválidas')
    }

    // return res.render('login', {
    // 	errors: {
    // 		email: {
    // 			msg: 'No se encuentra este email en nuestra base de datos'
    // 		}
    // 	}
    // });
  },
}

module.exports = controller
