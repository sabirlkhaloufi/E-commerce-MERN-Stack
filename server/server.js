require('dotenv').config();
const colors = require('colors');
const router = require('./Routes/AuthRoute');
const routerProduit = require('./Routes/ProduitsRoute');
const role = require('./Routes/userRoute');
const comments = require('./Routes/CommentRoute');
const CodePromo = require('./Routes/CodePromoRoute');
const Commande = require('./Routes/CommandeRoute');

// require categorie router
const categorie = require('./Routes/CategorieRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// const db = require('./Models/index')

// const router = require('./Routes/authRoute')

const express = require('express');
const {errorHandler} = require('./Middlewares/errorMiddleware');
const connectDB = require('./Config/ConfigDb');
const app = express();

const fileUpload = require('express-fileupload')

app.use(fileUpload());
// const db = require('./config/Db');
const sequelize = require('./Config/ConfigDb');
// connectDB();
app.use(cookieParser());
// use cors
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());  

app.use('/api/categories', categorie);
app.use('/api/auth', router);
app.use('/api/comments', comments);
app.use('/api/user', role);
app.use('/api/codePromo', CodePromo);
app.use('/api/commande', Commande);
app.use('/api/produit', routerProduit);




app.use(errorHandler)
const port = process.env.PORT || 8081;
app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port} is connected`)
    } else {
        console.log(err)
    }
});




module.exports = app;



