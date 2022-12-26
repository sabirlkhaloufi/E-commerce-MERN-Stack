const express = require('express');
const router = express.Router();
const {addProduit, updateProduit,deleteProduit,getOneProduit,getAllProduit, getPromoProduct,getOneProduitsByIdCategorie , getProductPaginatin,counts} = require('../Controllers/ProduitsController');
const {upload} = require('../Middlewares/imageMiddleware')

router.post('/add',upload,addProduit)
router.post('/update/:id',upload,updateProduit)
router.delete('/delete/:id',deleteProduit)
router.get('/getone/:id',getOneProduit)
router.get('/getall',getAllProduit)
router.get('/getallPromo', getPromoProduct)
router.get('/getallproduitsidcategorie/:id',getOneProduitsByIdCategorie)
router.get('/count', counts)

router.get('/getallPagination',getProductPaginatin)






module.exports = router 