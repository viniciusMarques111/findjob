const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: '.bd/app.db'
});

module.exports = sequelize