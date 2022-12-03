const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/configDb');
const Commentairs = db.define('Commentairs', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    commentair: {
      type:  Sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    Idproduit: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Produits',
          key: 'id'
        }
    }
  }, {
    
  });

  Commentairs.sync()

module.exports = Commentairs;


