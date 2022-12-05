const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
const db = require("../Models");
const cookieParser = require('cookie-parser');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    // token in cookies
    let token = req.cookies.token;
    // console.log(token)
// decode token 
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        // req.userId = decoded.id;
        console.log(decoded.id)
        const user = await User.findById(decoded.id)
        // const user = User.findById(decoded.id)
        // console.log(user.name)
        // 6355a45f640907b74d14bcba
        if(user){
            req.user = user

        next();
    }
    else{ 
        return res.status(401).send({ message: "Unauthorized!" });
    }
    
});
};

const isClient = async (req, res, next) => {
    const role = await Role.findById(req.user.roles[0])
    // console.log(role.name)
    if(role.name == 'client'){
        next();
        return;
    }
    else{
        return res.status(401).send({ message: "not autorised !" });
    }
}
const isLivreur = async (req, res, next) => {
    const role = await Role.findById(req.user.roles[0])
    // console.log(role.name)
    if(role.name == 'livreur'){
        next();
        return;
    }
    else{
        return res.status(401).send({ message: "not autorised !" });
    }
}

const isManger = async (req, res, next) => {
    const role = await Role.findById(req.user.roles[0])
    // console.log(role.name)
    if(role.name == 'manager'){
        next();
        return;
    }
    else{
        return res.status(401).send({ message: "not autorised !" });
    }
}




    // let token = req.cookies.token;
    // console.log(token)

    
    







    const authJwt = {
        verifyToken,
        isClient,
        isLivreur,
        isManger
        // isModerator
      };

      
      module.exports = authJwt;
      