const express = require('express');
const router = express.Router();
const {CreatPromoCode,UpdatePromoCode} = require('../Controllers/CodePromoController');


 
router.post('/creatPromoCode',CreatPromoCode)
router.post('/updatePromoCode',UpdatePromoCod)


// router.post('api/auth/login',Login)

module.exports = router 