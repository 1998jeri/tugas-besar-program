const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class Buku extends Sequelize.Model {}

Buku.init({
  judul: Sequelize.STRING,
  id_pengarang: Sequelize.INTEGER,
  id_penerbit: Sequelize.INTEGER,
  tahun_terbit: Sequelize.DATE,
  jumlah_buku: Sequelize.INTEGER
}, { sequelize, modelName: 'buku' });
	

  
module.exports = Buku;