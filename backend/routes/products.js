const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/api/products', async function (req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.get('/api/products/:id', async function (req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.post('/api/products', async function (req, res) {
  try {
    const product = new Product({
      name: 'DN Playstation',
      description:'The ultimate home entertainment center starts with DN Products',
      quantity: 9,
      user_id: 5
    });
    await product.save(function (err, doc) {
      if (err) return console.error(err);
      console.log('Product Document inserted succussfully!');
      res.status(200).json({ message: 'succussfully inserted' });
    });
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.put('/api/products/:id', async function (req, res) {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { quantity: 20 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(product);
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.delete('/api/products/:id', async function (req, res){
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id,
      function (err, docs) {
        if (err){ 
          console.log(err) 
      } 
      else{ 
        res.status(200).json({ message: 'succussfully deleted' });
      } 
      }
    );
  } catch (error) {
    res.status(500).send('Error');
  }
});

module.exports = router;
