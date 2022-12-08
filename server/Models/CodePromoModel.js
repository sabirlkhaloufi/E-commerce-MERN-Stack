
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
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //     model: 'users', // 'Actors' would also work
    //     key: 'id'
    //     }
    // },
    perproduit:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    peruser:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // produit_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //     model: 'produits', // 'Actors' would also work
    //     key: 'id'
    //     }
    // },
    quantite:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

Produits.hasMany(CodePromo);
CodePromo.belongsTo(Produits);

Users.hasMany(CodePromo);
CodePromo.belongsTo(Users);

// CodePromo.sync()

module.exports = CodePromo;