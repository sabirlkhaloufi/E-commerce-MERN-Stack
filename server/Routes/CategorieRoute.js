const express = require('express');
const router = express.Router();

const {addCategorie, updateCategorie, DeleteCategorie, GetAllCategorie} = require('../Controllers/CategorieController');

const {protect} = require('../Middlewares/authMiddleware');

 
router.post('/add',addCategorie)
router.put('/update/:id',updateCategorie)
router.delete('/delete/:id',DeleteCategorie)
router.get('/getAll',GetAllCategorie)


module.exports = router 