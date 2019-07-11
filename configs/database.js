const Sequelize = require('sequelize');

const sequelize = new Sequelize('peminjamn', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;