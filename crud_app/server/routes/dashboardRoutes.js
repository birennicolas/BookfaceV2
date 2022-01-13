const express = require('express');
const dashboardController = require('../controller/dashboardControllers');
const {ensureAuthenticated} = require("../../server/config/auth")
// const router = require('./loginRoutes');
const router = express.Router();

router.get('/', ensureAuthenticated, dashboardController.dashboard_get)

module.exports = router;