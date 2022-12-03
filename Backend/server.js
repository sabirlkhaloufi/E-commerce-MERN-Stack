require("dotenv").config()
const express = require("express")
const app = express()
const dbConnection = require("./Config/configDb");

port = process.env.PORT || 5000;

// start server
app.listen(port, ()=> console.log("Server Started: "+port))

module.exports = app;
