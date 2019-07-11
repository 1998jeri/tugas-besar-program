const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class SalesProduct extends Sequelize.Model {}

SalesProduct.init({
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER
}, { sequelize, modelName: 'sales_product' });
	

  
module.exports = SalesProduct;