const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Users = require('./UsersModel');
const Cammandes = db.define('cammandes', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    quantite: {
      type:  DataTypes.INTEGER,
      allowNull: false
    },
    priceTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    
    
  });


  Users.hasMany(Cammandes);
  Cammandes.belongsTo(Users);

  // Cammandes.sync()

module.exports = Cammandes;


