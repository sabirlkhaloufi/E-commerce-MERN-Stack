
const codepromo = require('../Models/CodePromoModel');
const asyncHandler = require('express-async-handler');
// let randomstring = Math.random().toString(36).slice(-8);


// method : get
// url : /api/codePromo/getAllCodePromo
// access : private

const GetAllCodePromo = asyncHandler( async(req,res)=>{
        try {
            const allcodePromo = await codepromo.findAll()
            res.status(200).send(allcodePromo)
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
 })


// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatPromoCode = asyncHandler(async (req, res) => {
    let hashCode = Math.random().toString(36).slice(-8)
   
    // console.log("hello api")
   
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).json('Please fill all fields.')
    }

try{
    
    const data = {
        code_promo: hashCode,
        pourcentage_promo: pourcentage_promo,
        date_expiration: date_expiration,

    }
    await codepromo.create(data)
    return  res.status(200).json({message:"creat code Promo success"})
 }catch (error) {
    return  res.status(400).json('not creat Code promo')
}

})

// method : post
// url : /api/codePromo/deletePromoCode/:id
// access : private

const DeletePromoCode = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
        const deletePromoCode = await codepromo.destroy({where:{id}})
        return  res.status(200).json({message:"delete code_Promo success"})
        
    } catch (error) {
        return  res.status(400).json({message:"Not delet code promo"})
       
      
    }
})

module.exports = {
    GetAllCodePromo,
    CreatPromoCode,
    DeletePromoCode
}
