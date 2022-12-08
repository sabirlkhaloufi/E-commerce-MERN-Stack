
const asyncHandler = require('express-async-handler');
const ProduitSchema = require('../Models/ProduitModel');

// method : post
// url : /api/produit
// access : public
const addProduit = asyncHandler(async (req, res) => {
const {title, description, price, quantite, promotion } = req.body

// if(!title || !description || !price|| !quantite || !promotion){
//     res.status(400)
//     throw new Error("Please add a text field")
// } 
const newproduit = await ProduitSchema.create({
    title,
    description,
    price,
    quantite,
    promotion,
})

if(newproduit){
    console.log(newproduit)
}else{
    console.log("not create data");
}

})
module.exports  = {addProduit}