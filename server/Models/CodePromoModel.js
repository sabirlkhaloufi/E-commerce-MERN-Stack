
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
const Users = require('./UsersModel');

const CodePromo = db.define('codepromo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_promo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pourcentage_promo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
    date_expiration:{
        type: DataTypes.DATE,
        allowNull: false
    }

});

Produits.hasMany(CodePromo);
CodePromo.belongsTo(Produits);

// CodePromo.sync()

module.exports = CodePromo;