const express = require('express');
const welcomeController = require('../../server/controller/welcomeControllers');
// const router = require('./loginRoutes');
const router = express.Router();

router.get('/', welcomeController.welcome_get)

module.exports = router;