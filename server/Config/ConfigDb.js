const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host:"localhost",
        dialect: 'postgres',
    },
  );

   try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }

  sequelize.sync()


  module.exports = sequelize
