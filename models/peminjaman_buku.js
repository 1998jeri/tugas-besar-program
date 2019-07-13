const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class PeminjamanBuku extends Sequelize.Model {}

PeminjamanBuku.init({
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER
}, { sequelize, modelName: 'peminjaman_buku' });
	

  
module.exports = PeminjamanBuku;