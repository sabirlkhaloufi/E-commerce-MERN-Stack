
const Sequelize = require('sequelize');
const db = require('../Config/ConfigDb');

const Categorie = db.define('categorie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Categorie;