const express = require('express');
const UserController = require('../controller/users.controller');
const validationRegister = require('../validations/validationRegister');

const router  = express.Router();

// route register users
router.post('/register' , validationRegister , UserController.createUser);

module.exports = router