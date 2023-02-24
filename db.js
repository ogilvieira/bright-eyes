const Sequelize = require('sequelize');

// Configura Models/Banco
const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco-de-dados.db'
});

module.exports = db;