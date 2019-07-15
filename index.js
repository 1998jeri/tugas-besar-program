//Modul Modol
const express = require('express');
const sequelize = require('./configs/database');
const bodyParser = require('body-parser');

//Model

const Product = require('./models/product');
const Sales = require('./models/sales');
const SalesProduct = require('./models/sales_product');

//Association Between Models
Sales.hasMany(SalesProduct);
SalesProduct.belongsTo(Product);


//Router
const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');

//Framework JS
const app = express();

//View Enggine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Gunakan Router
app.use(homeRouter);
app.use('/product',productRouter);


//Coba Koneksi Databasesss

/*sequelize
 .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/

app.listen(3000, () => {
    console.log('server started');
	
	//unggal dek make sync heula jang meh teu error
	//sequelize.sync();
})