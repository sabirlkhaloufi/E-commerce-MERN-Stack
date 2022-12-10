
const db = require('../Models/CommandeModel');
const commande = require('../Models/Command_Produits');

const asyncHandler = require('express-async-handler');



// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatCommande = asyncHandler(async (req, res) => {
    
      
       
        // console.log("hello api")
       
        const { quantite, priceTotal, code,status } = req.body;
        if (!quantite || !priceTotal || !code || !status ) {
            res.status(400).send('Please fill all fields.')
        }
    
    try{
        
        const data = {
            quantite: quantite,
            priceTotal: priceTotal,
            code: code,
            status:status
    
        }
        await db.create(data)
        res.status(200).send({message:"creat commandes success"})
     }catch (error) {
            res.status(400).send('not creat commandes')
    }
      
      
    })
    const UpdatePromoCode = asyncHandler(async (req, res) => {
//         const { old_code_promo, new_code_promo, new_pourcentage_promo, new_date_expiration } = req.body;
//        if (!old_code_promo || !new_code_promo || !new_pourcentage_promo || !new_date_expiration) {
//            res.status(400).send('Please fill all fields.')
//        }
     
//       try{
//        await db.update(
   
//            {
//                code_promo: new_code_promo,
//                pourcentage_promo: new_pourcentage_promo,
//                date_expiration: new_date_expiration,
//            },
//            {
//                where: { code_promo: old_code_promo },
//            })
//            res.status(400).send('creat code Promo success')
   
//        }catch (error) {
//            res.status(400).send('not update')
//    }
      
   
   })

    const DeleteCommande = asyncHandler( async(req,res)=>{
        const id =  req.params.id;
        try {
            const deleteCommandes = await db.destroy({where:{id}})
            res.status(200).send({message:"delete code_Promo success"})
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    })





module.exports = {
    CreatCommande,
    DeleteCommande
    
}
