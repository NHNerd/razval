const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();

// http://localhost:3000/api/auth/login
router.get('/login', controller.login);

// http://localhost:3000/api/auth/register
router.get('/register', controller.register);

module.exports = router;
