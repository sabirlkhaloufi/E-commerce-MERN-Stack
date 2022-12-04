require("dotenv").config()
const UserModel = require("../Models/UsersModel")
const RoleModel = require("../Models/RoleModel")
const generateTokenReset = require("../Utils/generateToken");
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmailForResetPass = require('../Utils/sendMailForPassword');


// method : post
// url    : api/auth/ForgetPassword
// acces  : Public
const ForgetPassword =  asyncHandler(async(req,res) => {
    //check for empty value
    if(!req.body.email){
        res.status(400)
        throw new Error("please enter your email")
    }

    // check this email is exist in database
    const user = await UserModel.findOne({where:{email: req.body.email}})

    if(user){
        user.token = generateTokenReset(user.id);
        user.save();
        sendEmailForResetPass(req,user,res);
    }
    else{
        res.status(400)
        throw new Error("this email not exist")  
    }
})

// method : post
// url    : api/auth/ResetPassword
// acces  : Public
const ResetPassword = asyncHandler(async(req,res) => {
     //get token in route 
     const token = req.params.token;
     const decoded = jwt.verify(token, process.env.JWT_SECRET)

     //get user by Id for compare tokenEmail with email in database
     const user = await UserModel.findOne({ where : {token:token}})
 
     
    if(user){

            //get new password in body
            const passHash = await bcrypt.hash(req.body.password, 10)
            await UserModel.update({ password: passHash},
            { where: {id: user.id} }	)
            res.json({message : "password is insert"})
        
     }else{
        res.status(400)
        throw new Error("password not reset")
     }

})


module.exports = {
    ForgetPassword,
    ResetPassword,
}