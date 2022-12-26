const express = require('express');
const router = express.Router();
const {Login,Register,ForgetPassword,ResetPassword , VerifyToken , Verify , Logout} = require('../Controllers/AuthController');
const {protect} = require('../Middlewares/authMiddleware');


 
router.post('/login',Login)
router.post('/register',Register)
router.get('/confirm/:token',Verify)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword) 
router.post('/verify_token', VerifyToken)
// Logout
router.get('/logout', Logout)

// router.post('api/auth/login',Login)

module.exports = router 