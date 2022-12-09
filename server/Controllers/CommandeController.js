
const db = require('../Models/CommandeModel');
// const commande = require('../Models/Command_Produits');

const asyncHandler = require('express-async-handler');



// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatCommande = asyncHandler(async (req, res) => {
   console.log("hello commande")
})




module.exports = {
    CreatCommande
    
}
