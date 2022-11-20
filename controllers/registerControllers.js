const path = require('path')
const bcryptjs=require('bcryptjs')
const {validationResult}=require('express-validator')
const User = require('../models/User');

const registerController = {
index: (req, res) => {
    res.render('register')
},
processRegister: (req,res)=>{
    
    const resultValidation=validationResult(req);
    // const errorsConsole=resultValidation.mapped();
    // console.log(errorsConsole);
    // console.log(resultValidation);
    // console.log(req.body);

    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

    let userInDBbyEmail = User.findByField('email', req.body.email);
    let userInDBbyuserName = User.findByField('email', req.body.userName);

		if (userInDBbyEmail || userInDBbyuserName) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

        let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 12),
			avatar: req.file.filename
		}

        let userCreated = User.create(userToCreate);

        return res.redirect('/login');

}
}

module.exports = registerController