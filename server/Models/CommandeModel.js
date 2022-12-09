const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
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
      type:  DataTypes.STRING,
      allowNull: false
    },
    priceTotal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    
  });

  Produits.hasMany(Cammandes);
  Cammandes.belongsTo(Produits);

  Users.hasMany(Cammandes);
  Cammandes.belongsTo(Users);

  // Cammandes.sync()

module.exports = Cammandes;


