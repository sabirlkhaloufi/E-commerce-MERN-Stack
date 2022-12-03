const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');
const Roles = sequelize.define('Roles', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
      type:  Sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    
  });

  Roles.sync()

module.exports = Roles;


