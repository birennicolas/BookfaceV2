const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require("../config/auth.js")

//login
router.get('/', (req,res)=>{
    res.render('welcome')
})

//register 
router.get('/', (req,res)=>{
    res.render('register')
})

// dashboard
router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    })
})

module.exports = router