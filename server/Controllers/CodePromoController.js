
const db = require('../Models/CodePromoModel');
const asyncHandler = require('express-async-handler');




const CreatPromoCode = asyncHandler(async (req, res) => {
    // console.log("hello api")
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    const data = {
        code_promo: code_promo,
        pourcentage_promo: pourcentage_promo,
        date_expiration: date_expiration,
    }

    await db.create(data)
    // console.log("yessssssssss")
})

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
    console.log("yessssssssss")
})
const DeletePromoCode = asyncHandler(async (req, res) => {
    const { code_promo } = req.body;
    if (!code_promo) {
        res.status(400).send('Needs PromoCode to delete it.')
    }

    await CodePromosModel.destroy({
        where: { code_promo: code_promo },
    });
})
module.exports = {
    CreatPromoCode,
    UpdatePromoCode,
    DeletePromoCode
}
