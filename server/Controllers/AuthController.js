const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const storage = require('local-storage')
const db = require('../Config/ConfigDb')
const cookie = require('cookie-parser')
const User = require('../Models/UsersModel');
const Role = require('../Models/RoleModel');
const {resetPasswordEmail , sendConfirmationEmail} = require('../Utils/SendEmail')  


// method : post
// url : /api/auth/login
// access : public
 


const Login = asyncHandler (async (req, res) => {
    console.log(req.body)          
    const {email, password} = req.body
    const user = await User.findOne({where:{email:email}})
    // console.log(user)
    if(user  && (await bcrypt.compare(password, user.password)) ){
        const token = generateToken(user._id)
        storage('token', token);
        res.cookie('token', token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        })

        // const role = await Role.findByPk(user.roles[0])
console.log('user.verified', user.verified)

        if (user.verified) {
            res.status(200).json({
                id: user.id,
                // name: user.name,
                // email: user.email ,
                token: generateToken(user._id),
                api_token:  user.token,
                email: user.email,
                first_name: user.name,
                // last_name: user.name,
                // role: role.name ,
                verified: user.verified ,
                // password: user.password ,
                // storage: storage('token')
            })
        } else {
            res.status(401)
            throw new Error('User not verified')
        }

    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
}) 

// // method : post
// // url : /api/auth/register
// // access : public

const Register =  asyncHandler (async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    // check if user exist 
    const user = await User.findOne({where:{email:email}})
    if(user){
        res.status(401)
        throw new Error("Email already exist")
    } 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    // create user
    const token = generateToken(name) 
    const newUser = await User.create({
        name,
        email,
        password: hashPassword ,
        token,
        roles: '6355a36aecb9329d18d55ebf'
    })
    if(newUser){
        // if (newUser.verified == false) { 
            sendConfirmationEmail(  
                newUser.name, 
                newUser.email,
                newUser.token ,
                newUser.id  
         ); 
            return res.status(201).send({ 
              message: "Pending Account. Please Verify Your Email!",
            });
        //   }
        // res.status(201).json({
        //     _id: newUser._id,
        //     name: newUser.name,
        //     email: newUser.email,
        //     verified : newUser.verified,
        //     token: token ,
        //     message: "User created successfully ... plaise verify your email"
        // })
    } else {
        res.status(402)
        throw new Error("Invalid user data")
    }
})
// // method : post
// // url : /api/auth/
// // access : public
const ForgetPassword = asyncHandler(async (req,res) => {
    const {email} = req.body
    console.log(req.body) 
    if(!email ){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    const user = await User.findOne({where:{email:email}})
    if(user){
        const token = generateToken(user._id)
        user.token = token
        user.save()
        const url = `${process.env.BASE_URL}api/auth/resetpassword/${token}`
        await  resetPasswordEmail(user.name, user.email , user.token)
        

    res.status(200).send('plaise check your email for reset your password of email : '+ req.body.email)
    } else {
        res.status(400)
        throw new Error("Invalid email")
    } 
}) 

// // method : post
// // url : /api/auth/login
// // access : public
const ResetPassword = asyncHandler(async (req,res) => {
    const token = req.params.token
    const {password , password2} = req.body
    if(!password || !password2){
        res.status(400)
        throw new Error("Please add a text field")
    }
    if(password != password2){
        res.status(400)
        throw new Error("password not match")
    }
    console.log('req.body :>> ', req.body);
    console.log('token :>> ', token);
    const user = await User.findOne({where:{token:token}})
    if(user){
        const salt = await bcrypt.genSalt(10) 
        const hashPassword = await bcrypt.hash(password, salt)
        user.password = hashPassword
        user.save()
        res.status(200).send('your password is reset')
        console.log(user)
    }else{
        res.status(400).send('token not valid') 
    }  
}) 

// method : post
// url : /api/auth/login
// access : public
const VerifyToken = asyncHandler(async (req,res) => {
    const token = req.body.api_token
    const user = await User.findOne(
        {where: {
            token: token
        }}
    )  
    if(user){

        res.status(200).json({
            success: true,
            message: "token is valid" ,
            api_token: user.token ,
            email: user.email ,
            // email_verified_at: user.verified ,
            first_name: user.name,
            id: user.id,
            last_name: "Stark",
            updated_at: user.updatedAt,
        })
    } else {
        res.status(401)
        throw new Error("Invalid token")
    }
})

const Verify = asyncHandler( async  (req,res) => {
    let token = req.params.token
    
    const user = await User.findOne({where:{token:token}})
    
    if(user){
        user.verified = true ;
        user.save()
        res.status(200).send('your account is verified')
    }else{
        res.status(400).send('token not valid')
    }
} ) 
// // method : post
// // url : /api/auth/register
// // access : private
const Client = async (req,res) => {
    // console.log(req.user) 
    const user = req.user
    const role = await Role.findById(user.roles[0])
     res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
    // token = req.params.id
    // res.status(200).json({success: true, data: "this is a get me function"})
}
// // method : post
// // url : /api/user/manager
// // access : private
const Manager = async (req,res) => {
    // console.log(req.user) 
    const user = req.user
    const role = await Role.findById(user.roles[0])
        res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
}
// // method : post
// // url : /api/user/Livreur
// // access : private
const Livreur = async (req,res) => {
    // console.log(req.user)
    const user = req.user
    const role = await Role.findById(user.roles[0])
        res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
}
// // Logout
const Logout = async (req,res) => {
    res.clearCookie('token')
    res.status(200).send('this a logout function')
}

// // generte jwt token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    Client,
    Manager,
    Livreur,
    Verify ,
    Logout ,
    VerifyToken
}
    