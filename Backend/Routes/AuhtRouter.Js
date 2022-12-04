const express = require('express')
const router = express.Router()
const {ForgetPassword,ResetPassword} = require('../Controllers/AuhtController')


router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)

module.exports = router