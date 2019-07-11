var express = require('express')
var router = express.Router()

//Panggil dulu file controllernya
var bukuController = require("../controllers/buku");

// Set Get Rute All buku
router.get('/', bukuController.getAllbuku);

// Set Get Rute Find Product by PK
router.get('/query/find/:id', productController.getFindBukuPK);

// Set Get Rute All Product by name
router.get('/query/find/name/:name', productController.getFindNamaBuku);

// Set Get Rute All Product by name
router.get('/init', bukuController.setBukuBulk);

// Set Get Rute Form
router.get('/add', bukuController.getForm);

// Set Post rute
router.post('/', bukuController.postAddBuku);

module.exports = router