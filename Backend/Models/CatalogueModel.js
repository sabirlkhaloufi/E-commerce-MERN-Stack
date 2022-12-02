
const Sequelize = require('sequelize');
const db = require('../Config/ConfigDb');

const Catalogue = db.define('catalogue', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Catalogue;