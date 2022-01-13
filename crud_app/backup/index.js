const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require("../server/config/auth.js")

//login
router.get('/welcome', (req,res)=>{
    res.render('welcome')
})

//register 
router.get('/register', (req,res)=>{
    res.render('register')
})

// dashboard
router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    })
})

module.exports = router