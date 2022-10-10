const { Sequelize } = require('sequelize');
require('dotenv').config(); /* Habilitamos el uso de las variables de entorno */

module.exports = new Sequelize({
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DB || 'products',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PWD || '1597530'
});