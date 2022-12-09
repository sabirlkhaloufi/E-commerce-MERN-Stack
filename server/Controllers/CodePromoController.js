
const db = require('../Models/CodePromoModel');
const asyncHandler = require('express-async-handler');
// let randomstring = Math.random().toString(36).slice(-8);


// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatPromoCode = asyncHandler(async (req, res) => {
    const caracters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   
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

// method : post
// url : /api/codePromo/updatePromoCode
// access : private

const UpdatePromoCode = asyncHandler(async (req, res) => {
     const { old_code_promo, new_code_promo, new_pourcentage_promo, new_date_expiration } = req.body;
    if (!old_code_promo || !new_code_promo || !new_pourcentage_promo || !new_date_expiration) {
        res.status(400).send('Please fill all fields.')
    }
  
   try{
    await db.update(

        {
            code_promo: new_code_promo,
            pourcentage_promo: new_pourcentage_promo,
            date_expiration: new_date_expiration,
        },
        {
            where: { code_promo: old_code_promo },
        })
        res.status(400).send('creat code Promo success')

    }catch (error) {
        res.status(400).send('not update')
}
   

})

// method : post
// url : /api/codePromo/deletePromoCode/:id
// access : private


const DeletePromoCode = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
        const deletePromoCode = await db.destroy({where:{id}})
        res.status(200).send({message:"delete code_Promo success"})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = {
    CreatPromoCode,
    UpdatePromoCode,
    DeletePromoCode
}
