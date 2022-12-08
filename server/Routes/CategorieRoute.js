const express = require('express');
const router = express.Router();
const {Login,Register,ForgetPassword,ResetPassword , GetMe , Verify , Logout} = require('../Controllers/AuthController');
const {protect} = require('../Middlewares/authMiddleware');


 
router.post('/login',Login)
router.post('/register',Register)
router.get('/confirm/:token',Verify)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword) 
// Logout
router.get('/logout', Logout)

// router.post('api/auth/login',Login)

module.exports = router 