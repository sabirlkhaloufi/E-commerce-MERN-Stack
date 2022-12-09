
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
const Users = require('./UsersModel');

const Command_Produits = db.define('commandProduits', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
});

Command_Produits.hasMany(CodePromo);
CodePromo.belongsTo(Command_Produits);

// Users.hasMany(CodePromo);
// CodePromo.belongsTo(Users);

// CodePromo.sync()

module.exports = CodePromo;