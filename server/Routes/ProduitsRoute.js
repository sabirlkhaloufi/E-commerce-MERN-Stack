const express = require('express');
const router = express.Router();
const {addProduit} = require('../Controllers/ProduitsController');




router.post('/add',addProduit)


module.exports = router 