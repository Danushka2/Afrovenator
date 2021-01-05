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

module.exports = router;
