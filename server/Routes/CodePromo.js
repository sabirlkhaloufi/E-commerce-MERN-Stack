const express = require('express');
const router = express.Router();
const {CreatPromoCode,UpdatePromoCode,DeletePromoCode} = require('../Controllers/CodePromoController');


 
router.post('/creatPromoCode',CreatPromoCode)
router.put('/updatePromoCode/:id',UpdatePromoCode)
router.delete('/deletePromoCode/:id',DeletePromoCode)




module.exports = router 