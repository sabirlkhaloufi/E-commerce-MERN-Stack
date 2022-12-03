const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');
const Users = sequelize.define('Users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type:  Sequelize.Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: Sequelize.DataTypes.STRING
    },
    phone: {
        type: Sequelize.DataTypes.STRING
    },
    verified: {
        type: Sequelize.DataTypes.STRING
    },
    token: {
        type: Sequelize.DataTypes.STRING
    },
    Idrole: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id'
        }
    }
  }, {
    
  });

  Users.sync()

module.exports = Users;


