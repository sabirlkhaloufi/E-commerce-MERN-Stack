const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/configDb');
const Cammandes = db.define('Cammandes', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    quantite: {
      type:  Sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    priceTotal: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.DataTypes.STRING
    },
    Idproduit: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Produits',
          key: 'id'
        }
    },
    Iduser: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
    }
    
  });

  Cammandes.sync()

module.exports = Cammandes;


