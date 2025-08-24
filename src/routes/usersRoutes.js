const express = require('express');
const UserController = require('../controller/users.controller');
const validationRegister = require('../validations/validationRegister');
const validationLogin = require('../validations/validationLogin') 

const router  = express.Router();

// route register users
router.post('/register' , validationRegister , UserController.createUser);
router.post('/login' , validationLogin ,  UserController.loginUser)

module.exports = router