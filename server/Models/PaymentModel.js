const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/configDb');
const Cammandes = require('./CommandeModel');
const Payments = db.define('payments', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    // IdCommande: {
    //     type: Sequelize.DataTypes.INTEGER,
    //     references: {
    //       model: 'commandes',
    //       key: 'id'
    //     }
    // }
  }, {
    
  });

  Cammandes.hasMany(Payments);
  Payments.belongsTo(Cammandes);

  Payments.sync()

module.exports = Payments;


