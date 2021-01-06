const express = require('express');
const router = express.Router();
const { getUsers, getUser, userLogin, deleteUser, userSignup, updateUser } = require('../controllers/userController');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.route('/').get(getUsers);
router.route('/:email').get(getUser);
router.route('/:email').delete(deleteUser);
router.route('/login').post(jsonParser, userLogin);
router.route('/signup').post(jsonParser, userSignup);
router.route('/:email').put(jsonParser, updateUser);

module.exports = router;
