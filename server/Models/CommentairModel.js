const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
const User = require('./UsersModel');
const Commentairs = db.define('commentairs', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    }, 
   
    content: {
      type:  DataTypes.STRING,
      allowNull: false
    },

    // Idproduit: {
    //     type: Sequelize.DataTypes.INTEGER,
    //     references: {
    //       model: 'produits',
    //       key: 'id'
    //     }
    // }
  }, {
    
  });


  Produits.hasMany(Commentairs);
  Commentairs.belongsTo(Produits);

  User.hasMany(Commentairs);
  Commentairs.belongsTo(User);

  Commentairs.sync()
  // Commentairs.sync()

module.exports = Commentairs;


