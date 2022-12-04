const { Sequelize, DataTypes} = require('sequelize');
const db = require('../Config/configDb');
const Roles = require('./RoleModel');
const Users = db.define('users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    verified: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    // Idrole: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'roles',
    //       key: 'id'
    //     }
    // }
  }, {
    
  });


  Roles.hasMany(Users);
  Users.belongsTo(Roles);

  Users.sync()

module.exports = Users;


