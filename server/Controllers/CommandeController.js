
const db = require('../Models/CommandeModel');
const commande = require('../Models/Command_Produits');

const asyncHandler = require('express-async-handler');



// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatCommande = asyncHandler(async (req, res) => {
    
      
       
        // console.log("hello api")
       
        const { code_promo, pourcentage_promo, date_expiration } = req.body;
        if (!code_promo || !pourcentage_promo || !date_expiration) {
            res.status(400).send('Please fill all fields.')
        }
    
    try{
        
        const data = {
            code_promo: hashCode,
            pourcentage_promo: pourcentage_promo,
            date_expiration: date_expiration,
    
        }
        await db.create(data)
        res.status(200).send({message:"creat code Promo success"})
     }catch (error) {
            res.status(400).send('not creat Code promo')
    }
      
      
    })





module.exports = {
    CreatCommande
    
}
