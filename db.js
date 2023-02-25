const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// Configura Models/Banco
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco-de-dados.db',
    logging: false
});

let db = {};

fs.readdirSync(path.join(__dirname, 'models/')).forEach(function(filename) {
    let schema = {};
    schema.path = path.join(__dirname, 'models/', filename)
    schema.name = filename.replace(/\.[^/.]+$/, "");
    db[schema.name] = require(schema.path)(sequelize, Sequelize.DataTypes);
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) { db[modelName].associate(db); }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.Op = Sequelize.Op

module.exports = db;