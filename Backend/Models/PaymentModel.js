const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');
const Payments = sequelize.define('Payments', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    IdCommande: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Commandes',
          key: 'id'
        }
    }
  }, {
    
  });

  Payments
.sync()

module.exports = Payments;


