
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Categorie = require('./CategorieModel');

const Produits = db.define('produits', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    promotion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // image: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // categore_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //     model: 'categore', // 'Actors' would also work
    //     key: 'id'
    //     }
    // },
});

Categorie.hasMany(Produits);
Produits.belongsTo(Categorie);

// Produits.sync({ force: true })
// Produits.sync()
module.exports = Produits;