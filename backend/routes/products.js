const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct);
router.route('/:id').delete(deleteProduct);
router.route('/').post(jsonParser, createProduct);
router.route('/:id').put(jsonParser, updateProduct);


module.exports = router;
