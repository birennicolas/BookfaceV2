const express = require('express');
const loginController = require('../controller/loginControllers');
const {ensureAuthenticated} = require("../config/auth.js")

const router = express.Router();

router.get('/', loginController.login_get);
router.post('/', loginController.login_post);

// router.post('/login', (req,res,next)=>{
//     passport.authenticate('local',{
//         successRedirect: '/dashboard',
//         failureRedirect: '/users/login',
//         failureFlash: true
//     })(req,res,next)
// })

// Exporter //
module.exports = router;