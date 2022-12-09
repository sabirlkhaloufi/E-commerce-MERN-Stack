const express = require('express');
const router = express.Router();
const {CreatCommande} = require('../Controllers/CommandeController');


 
router.post('/creatCommande',CreatCommande)


module.exports = router 