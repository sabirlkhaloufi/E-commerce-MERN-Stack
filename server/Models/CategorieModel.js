const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');

const Categorie = db.define('categorie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Categorie.sync()
module.exports = Categorie;