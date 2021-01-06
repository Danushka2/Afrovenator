const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
var bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json();

router.get('/api/users', async function (req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.get('/api/users/:email', async function (req, res) {
  try {
    const user = await User.findOne({
      email: req.params.email,
    });
    res.json(user);
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.post('/api/users/login', jsonParser, async function (req, res) {
  try {
    const password = req.body.password;
    const user = await User.findOne({
      email: req.body.email,
    });

    if (await user.matchPassword(password)) {
      console.log("password matched");
      res.json(user);
    } else {
      res.json({ message: 'password not matched' });
    }
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.delete('/api/users/:email', async function (req, res) {
  try {
    const user = await User.findOneAndDelete({
      email: req.params.email,
    });
    res.json(user);
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.post('/api/users/signup', jsonParser, async function (req, res) {
  try {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
    });

    await user.save(function (err, doc) {
      if (err) return console.error(err);
      console.log('User Document inserted succussfully!');
      console.log(req.body);
      res.status(200).json({ message: 'succussfully inserted' });
    });
  } catch (error) {
    res.status(500).send('Error');
  }
});

router.put('/api/users/:email', jsonParser, async function (req, res) {
  try {
    const user = await User.findOneAndUpdate(
      {
        email: req.params.email,
      },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
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
});

module.exports = router;
