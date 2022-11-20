const path = require('path')
const bcryptjs=require('bcryptjs')
const {validationResult}=require('express-validator')

const registerController = {
index: (req, res) => {
    res.render('register')
},
processRegister: (req,res)=>{
    
    const resultValidation=validationResult(req);
    const errorsConsole=resultValidation.mapped();
    console.log(errorsConsole);
    // console.log(resultValidation);
    // console.log(req.body);

    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

}
}

module.exports = registerController