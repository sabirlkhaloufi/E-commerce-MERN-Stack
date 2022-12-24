const Sequelize = require('sequelize');
require('dotenv').config()
const colors = require('colors');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host:process.env.DB_HOST,
        port: process.env.DB_PORT ,
        dialect: 'postgres',
    },
  );

   try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.' .green.bold );
  } catch (error) {
    console.log(error);
  }


  // sequelize.sync({force:true});  
  // sequelize.sync()


  module.exports = sequelize
      