const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/ConfigDb')
const Roles = db.define('roles', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  }, {
    
  });

  // Roles.sync()

module.exports = Roles;


