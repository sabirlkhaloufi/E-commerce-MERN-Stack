
const db = require('../Models/CodePromoModel');
const asyncHandler = require('express-async-handler');


// method : post
// url : /api/codePromo/creatPromoCode
// access : private

const CreatPromoCode = asyncHandler(async (req, res) => {
    // console.log("hello api")
    let randomstring = Math.random().toString(36).slice(-8);
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    const data = {
        code_promo: randomstring,
        pourcentage_promo: pourcentage_promo,
        date_expiration: date_expiration,
    }

    await db.create(data)
  
    console.log("yessssssssss")
})

// method : post
// url : /api/codePromo/DeletePromoCode
// access : private

const UpdatePromoCode = asyncHandler(async (req, res) => {
    const { old_code_promo, new_code_promo, new_pourcentage_promo, new_date_expiration } = req.body;
    if (!old_code_promo || !new_code_promo || !new_pourcentage_promo || !new_date_expiration) {
        res.status(400).send('Please fill all fields.')
    }
    
    await db.update(
        {
            code_promo: new_code_promo,
            pourcentage_promo: new_pourcentage_promo,
            date_expiration: new_date_expiration,
        },
        {
            where: { code_promo: old_code_promo },
        }
       
    );
  
})

// method : post
// url : /api/codePromo/deletePromoCode
// access : private

const DeletePromoCode = asyncHandler(async (req, res) => {
    const { code_promo } = req.body;
    if (!code_promo) {
        res.status(400).send('Needs PromoCode to delete it.')
    }

    await db.destroy({
        where: { code_promo: code_promo },
    });
    // console.log("yessssssssss")
})
module.exports = {
    CreatPromoCode,
    UpdatePromoCode,
    DeletePromoCode
}
