const express = require('express');
const router = express.Router();
const {CreatCommande,DeleteCommande,UpdateCommandes} = require('../Controllers/CommandeController');


 
router.post('/creatCommande',CreatCommande)
router.put('/updateCommandes/:id',UpdateCommandes)
router.delete('/deleteCommande/:id',DeleteCommande)


module.exports = router 