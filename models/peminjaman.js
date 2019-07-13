const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class Peminjaman extends Sequelize.Model {}

Peminjaman.init({
  date: Sequelize.DATE
}, { sequelize, modelName: 'peminjaman' });
	

  
module.exports = Peminjaman;