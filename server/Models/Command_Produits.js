
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
const commands = require("./CommandeModel")

const Command_Produits = db.define('commandProduits', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
});

Produits.hasMany(Command_Produits);
Command_Produits.belongsTo(Produits);

commands.hasMany(Command_Produits);
Command_Produits.belongsTo(commands);

// CodePromo.sync()

module.exports = CodePromo;