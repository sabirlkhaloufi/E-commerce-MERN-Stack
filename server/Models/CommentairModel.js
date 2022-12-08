const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb');
const Produits = require('./ProduitModel');
const Commentairs = db.define('commentairs', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    commentair: {
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

  // Commentairs.sync()

module.exports = Commentairs;


