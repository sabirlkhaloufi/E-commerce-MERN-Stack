const express = require('express');
const router = express.Router();
const {CreatPromoCode} = require('../Controllers/CodePromoController');


 
router.post('/creatPromoCode',CreatPromoCode)
router.post('/UpdatePromoCode',UpdatePromoCode)


// router.post('api/auth/login',Login)

module.exports = router 