
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');

const Catalogue = db.define('catalogue', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Catalogue.sync()

module.exports = Catalogue;