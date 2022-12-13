const express = require('express');
const router = express.Router();
const {addProduit, updateProduit,deleteProduit,getOneProduit,getAllProduit} = require('../Controllers/ProduitsController');
const {upload} = require('../Middlewares/imageMiddleware')

router.post('/add',upload,addProduit)
router.put('/update/:id',updateProduit)
router.delete('/delete/:id',deleteProduit)
router.get('/getone/:id',getOneProduit)
router.get('/getall',getAllProduit)





module.exports = router 