const express = require('express');
const router = express.Router();
const {GetAllCodePromo,CreatPromoCode,DeletePromoCode} = require('../Controllers/CodePromoController');


router.get('/getAllCodePromo',GetAllCodePromo)
router.post('/creatPromoCode',CreatPromoCode)
router.delete('/deletePromoCode/:id',DeletePromoCode)

module.exports = router 