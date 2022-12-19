const express = require('express');
const router = express.Router();
const {CreatCommande,DeleteCommande,UpdateCommandes,GetAllCommands} = require('../Controllers/CommandeController');


 
router.post('/creatCommande',CreatCommande)
router.delete('/deleteCommande/:id',DeleteCommande)
router.get('/getAllCommands',GetAllCommands)


module.exports = router 