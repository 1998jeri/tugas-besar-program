//Panggil Model Untuk di gunakan 
const Buku = require('../models/buku');
const Sales = require('../models/sales');
const SalesBuku = require('../models/sales_buku');

module.exports.getAllBuku = (req, res) =>{
  //Logic tampil data
  // Find all product
	Buku.findAll().then(buku => {
	  res.json(buku);
	}).catch((error)=>{
		console.log(error);
	});
}

module.exports.getFindBukuPK = (req, res) =>{
  // Find by primary key
	//Product.findByPk(req.params.id).then(product => {
		//res.json(product)
	//})
	
	Sales
		.findOne({
			where:{
				id: req.params.id
			},
			include:[{
				model:SalesProduct
			}]
		}).then((sales)=>{
			res.json(sales)
		}).catch((error)=>{
			console.log(error);
		});
}

module.exports.getFindNamaBuku = (req, res) =>{
  // Find by name
	Buku.findAll({ where: { judul: req.params.judul } }).then(buku => {
		res.json(buku)
	})

}

module.exports.getForm = (req, res) =>{
  // Find by name
	res.render('buku/add')
}

exports.setBukuBulk = (req, res, next) => {
	Product.bulkCreate([
		{
		judul : 'Dilan 1990',
		id_penerbit : 1,
		id_pengarang: 1,
		tahun_terbit: 2009,
		jumlah_buku: 100
		},
		{
		judul : 'Dilan 1991',
		id_penerbit : 2,
		id_pengarang: 2,
		tahun_terbit: 2009,
		jumlah_buku: 120
		},
		{
		judul : 'Dilan 1992',
		id_penerbit : 3,
		id_pengarang: 3,
		tahun_terbit: 2009,
		jumlah_buku: 140
		},
		]).then(buku => {
		res.send('data berhasil disimpan');
		})
}
module.exports.postAddBuku = (req, res) =>{
	//Logic to save data
  
	//Simpan isian form pada variabel di bawah
	var judul = req.body.judul;
	var id_penerbit = req.body.id_penerbit;
	var id_pengarang = req.body.id_pengarang;
	var tahun_terbit = req.body.tahun_terbit;
	var jumlah_buku = req.body.jumlah_buku;

	//Lemparkan data tersebut ke model product
	Product.create({
    judul: judul,
    id_penerbit: id_penerbit,
    id_pengarang: id_pengarang,
    tahun_terbit: tahun_terbit,
    jumlah_buku: jumlah_buku
	  })
	  .then(buku => {
		console.log(buku.toJSON());
	  });
	  
	
	//Setelah save kembalikan ke url
	res.redirect('/buku');
}
