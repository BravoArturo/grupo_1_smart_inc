const path = require('path')

const indexController = {
  index: (req, res) => {
    console.log(req.session.user)
    res.render('index', {
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
}

module.exports = indexController
