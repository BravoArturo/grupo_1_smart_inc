const path = require('path')

const indexController = {
  index: (req, res) => {
    console.log(req.session.user)
    res.render('index', {
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
  },
}

module.exports = indexController
