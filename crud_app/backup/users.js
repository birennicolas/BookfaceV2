const express = require('express')
//const { render } = require('express/lib/response')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
//require("../config/passport")(passport)

const mongoose= require('mongoose')
const User = require("./model/user")

// handling GET requests and rendering data to appropriate pages
router.get('/login', (req,res)=>{
 res.render('login')
})

router.get('/register', (req,res)=>{
    res.render('register')
})

router.post('/register', (req,res)=>{
const {name, email,password,password2} = req.body
let errors=[]
console.log(' Name : ' + name+ ' email : ' + email+ ' pass : '+ password)

if( !name || !email || !password || !password2){
    errors.push({msg : "Please fill in all the fields"})
}

if(password != password2){
    errors.push({msg: 'Passwords must match!'})
}

if(password.length <6 ){
    errors.push({msg: "Password must be at least 6 characters"})
}

if(errors.length>0){
    res.render('register', {
        errors: errors,
        name: name,
        email: email,
        password: password,
        password2: password2
    })
} else { 
    User.findOne({email : email}).exec((err,user)=>{
        console.log(user)
        if(user){
            errors.push({msg: "email is already registered"})
            res.render('register',{errors,name,email,password,password2})
        } else { 
            const newUser = new User({
                name: name,
                email: email,
                password: password
            })
            bcrypt.genSalt(10,(err,salt)=> 
            bcrypt.hash(newUser.password,salt,
                (err,hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg', 'You have been registered successfully')
                    res.redirect('/users/login');
                    })
                    .catch(value=> console.log(value));
                      
                }));
        }
    })
}
})

router.post('/login', (req,res,next)=>{
passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
})(req,res,next)
})

router.get('/logout', (req,res)=>{
req.logout()
req.flash('success_msg', "You're logged out!")
res.redirect('/users/login')
})

module.exports = router