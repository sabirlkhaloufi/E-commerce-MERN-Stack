const db = require('../Models/CommandeModel');
const Commande = require('../Models/Command_Produits');
const asyncHandler = require('express-async-handler');



// method : get
// url : /api/commande/creatCommande
// access : private

    const CreatCommande = asyncHandler(async (req, res) => {
       const codeCommands = Math.random().toString(36).slice(-8);
            // console.log("hello api")
            const { quantite, priceTotal, code,status } = req.body;
            if (!quantite || !priceTotal || !code || !status ) {
                res.status(400).send('Please fill all fields.')
            }
        try{
            const data = {
                quantite: quantite,
                priceTotal: priceTotal,
                code: codeCommands,
                status:status
            }
            await db.create(data)
            res.status(200).send({message:"creat commandes success"})
        }catch (error) {
                res.status(400).send('not creat commandes')
        }  
        })

// method : delete
// url : /api/commande/deleteCommande/:id
// access : private

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

// method : get
// url : /api/commande/getAllCommands
// access : private

   const GetAllCommands = asyncHandler( async(req,res)=>{
        try {
            const allCommands = await Commande.findAll()
            res.status(200).send(allCommands)
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
   })

module.exports = {

    CreatCommande,
    DeleteCommande,
    GetAllCommands
    
}
