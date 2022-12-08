const express = require('express');
const router = express.Router();
const {CreatPromoCode,UpdatePromoCode,DeletePromoCode} = require('../Controllers/CodePromoController');


 
router.post('/creatPromoCode',CreatPromoCode)
router.post('/updatePromoCode',UpdatePromoCode)
router.post('/deletePromoCode',DeletePromoCode)


// router.post('api/auth/login',Login)

module.exports = router 