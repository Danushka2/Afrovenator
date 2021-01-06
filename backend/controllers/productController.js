const Product = require('../models/productModel');

// @desc    Get Products
// @route   GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error');
  }
};

// @desc    Get a Product
// @route   GET /api/products/:id
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).send('Error');
  }
};

// @desc    Create a Product
// @route   POST /api/products/
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      user_id: req.body.user_id,
    });

    await product.save(function (err, doc) {
      if (err) return console.error(err);
      console.log('Product Document inserted succussfully!');
      console.log(req.body);
      res.status(200).json({ message: 'succussfully inserted' });
    });
  } catch (error) {
    res.status(500).send('Error');
  }
};

// @desc    Update a Product
// @route   PUT /api/products/
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        user_id: req.body.user_id,
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: 'updated' });
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error');
  }
};

// @desc    Delete a Product
// @route   DELETE /api/products/
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: 'succussfully deleted' });
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error');
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
