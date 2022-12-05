require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())
// require('./Models/index');
const { errorHandler } = require("./Middlewares/ErrorHandler");
const AuthRouter = require("./Routes/AuhtRouter");

// require RoleController for create default roles automatique
const CreateRoles = require('./Controllers/RoleController');
CreateRoles();


app.use("/api/auth",AuthRouter)

app.use(errorHandler)



port = process.env.PORT || 5000;

// start server
app.listen(port, ()=> console.log("Server Started: "+port))

module.exports = app;
