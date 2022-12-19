
const { Sequelize, DataTypes, ARRAY} = require('sequelize');
const db = require('../Config/ConfigDb');
const Categorie = require('./CategorieModel');

const Produits = db.define('produits', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: ARRAY(DataTypes.STRING),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
     oldprice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    promotion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    
   
});

Categorie.hasMany(Produits);
Produits.belongsTo(Categorie);

// Produits.sync({ force: true })
// Produits.sync()
module.exports = Produits;