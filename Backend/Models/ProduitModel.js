
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
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantite: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    promotion: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categore_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'categore', // 'Actors' would also work
        key: 'id'
        }
    },
});

module.exports = Categorie;