
const Sequelize = require('sequelize');
const db = require('../Config/ConfigDb');

const CodePromo = db.define('codepromo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'users', // 'Actors' would also work
        key: 'id'
        }
    },
    perproduit:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    peruser:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    produit_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Produits', // 'Actors' would also work
        key: 'id'
        }
    },
    quantite:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = CodePromo;