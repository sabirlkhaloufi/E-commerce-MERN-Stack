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
      allowNull: true
    },
    image: {
      type:  DataTypes.STRING,
      allowNull: true
    },
    produitId: {
      type:  DataTypes.INTEGER,
      allowNull: true ,
      references: {
        model: Produits,
        key: 'id'
      }
    },
    userId: {
      type:  DataTypes.INTEGER,
      allowNull: true ,
      references: {
        model: User,
        key: 'id'
      }
    },

    
  }, {
    
  });

  // Produits.hasMany(Commentairs);
  Commentairs.belongsTo(Produits);
  Commentairs.belongsTo(User);


  // Produits.hasMany(Commentairs);
  // Commentairs.belongsTo(Produits);

  // User.hasMany(Commentairs);
  // Commentairs.belongsTo(User);

  // Commentairs.sync()   
  // Commentairs.sync({ force: true })
  // Commentairs.sync()

module.exports = Commentairs; 


