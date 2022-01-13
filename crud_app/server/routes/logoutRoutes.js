const express = require('express');
const logoutController = require('../controller/logoutControllers');
// const router = require('./loginRoutes');
const router = express.Router();

router.get('/', logoutController.logout_get)

module.exports = router;