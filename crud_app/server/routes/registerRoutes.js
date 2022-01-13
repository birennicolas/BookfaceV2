const express = require('express');
const router = express.Router();

const registerController = require('../controller/registerControllers');
// const router = require('./loginRoutes');

router.get('/', registerController.register_get)
router.post('/', registerController.register_post)

module.exports = router;