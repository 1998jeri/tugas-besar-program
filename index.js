//Modul Modol
const express = require('express');
const sequelize = require('./configs/database');
const bodyParser = require('body-parser');

//Model

const Buku = require('./models/buku');
const Peminjaman = require('./models/peminjaman');
const PeminjamanBuku = require('./models/peminjaman_buku');

//Association Between Models
Peminjaman.hasMany(PeminjamanBuku);
PeminjamanBuku.belongsTo(Buku);


//Router
const homeRouter = require('./routes/home');
const bukuRouter = require('./routes/buku');

//Framework JS
const app = express();

//View Enggine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Gunakan Router
app.use(homeRouter);
app.use('/buku',bukuRouter);


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