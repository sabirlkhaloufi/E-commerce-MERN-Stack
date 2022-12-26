const Joi = require('joi');

const CommentValidation = (req, res, next) => {
    const schema = Joi.object({
        content: Joi.string().required().min(10).max(255),
        // image: Joi.string().required(),
        produitId: Joi.number().required(),
        userId: Joi.number().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ message: error.details[0].message });
    } else {
        console.log( "value is good" , value );
        next();
    }
}

module.exports = CommentValidation;