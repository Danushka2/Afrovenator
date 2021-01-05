const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
var bodyParser = require('body-parser');

const app = express();
// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

router.post('/api/products', jsonParser, async function (req, res) {
  console.log(req.body);

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
});

router.put('/api/products/:id', jsonParser, async function (req, res) {
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
          res.status(200).json({"message":"updated"});
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.delete('/api/products/:id', async function (req, res) {
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
});

module.exports = router;
