require("dotenv").config()
const express = require("express")
const app = express()

// require RoleController for create default roles automatique
const Role = require('./Controllers/RoleController')
require('./Models/index');
port = process.env.PORT || 5000;

// start server
app.listen(port, ()=> console.log("Server Started: "+port))

module.exports = app;
