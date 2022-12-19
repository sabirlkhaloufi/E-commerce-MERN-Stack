const express = require('express');
const router = express.Router();
const {addProduit, updateProduit,deleteProduit,getOneProduit,getAllProduit, getPromoProduct} = require('../Controllers/ProduitsController');
const {upload} = require('../Middlewares/imageMiddleware')

router.post('/add',upload,addProduit)
router.put('/update/:id',updateProduit)
router.delete('/delete/:id',deleteProduit)
router.get('/getone/:id',getOneProduit)
router.get('/getall',getAllProduit)
router.get('/getallPromo', getPromoProduct)





module.exports = router 