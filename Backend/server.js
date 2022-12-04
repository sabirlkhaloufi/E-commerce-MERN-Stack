require("dotenv").config()
const express = require("express")
const app = express()
// require('./Models/index');

// require RoleController for create default roles automatique
const CreateRoles = require('./Controllers/RoleController')
CreateRoles();



port = process.env.PORT || 5000;

// start server
app.listen(port, ()=> console.log("Server Started: "+port))

module.exports = app;
