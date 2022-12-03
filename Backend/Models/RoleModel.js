const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/configDb')
const Roles = db.define('Roles', {
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


