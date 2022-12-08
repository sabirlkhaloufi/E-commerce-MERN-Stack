const express = require('express');
const router = express.Router();
const {addProduit, updateProduit,deleteProduit,getOneProduit,getAllProduit} = require('../Controllers/ProduitsController');




router.post('/add',addProduit)
router.put('/update/:id',updateProduit)
router.delete('/delete/:id',deleteProduit)
router.get('/getone/:id',getOneProduit)
router.get('/getall',getAllProduit)





module.exports = router 