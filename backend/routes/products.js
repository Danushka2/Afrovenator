const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

const app = express();
var jsonParser = bodyParser.json();

router.route('/api/products').get(getProducts);
router.route('/api/products/:id').get(getProduct);
router.route('/api/products/:id').delete(deleteProduct);
router.route('/api/products').post(jsonParser, createProduct);
router.route('/api/products/:id').put(jsonParser, updateProduct);


module.exports = router;
