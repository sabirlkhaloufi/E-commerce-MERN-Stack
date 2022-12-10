const express = require('express');
const router = express.Router();
const {CreatCommande,DeleteCommande} = require('../Controllers/CommandeController');


 
router.post('/creatCommande',CreatCommande)
router.delete('/deleteCommande',DeleteCommande)


module.exports = router 