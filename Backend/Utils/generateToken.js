
const jwt = require("jsonwebtoken");

// generate token for reset password
const generateTokenReset = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '10m'
    })
}

module.exports = generateTokenReset