const db = require('../Models/CodePromoModel');
const asyncHandler = require('express-async-handler')


const CodePromosModel = db.CodePromosModel;

const CreatPromoCode = asyncHandler(async (req, res) => {
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    const data = {
        code_promo: code_promo,
        pourcentage_promo: pourcentage_promo,
        date_expiration: date_expiration,
    }

    await CodePromosModel.create(data)
})
module.exports = {
    CreatPromoCode
}
