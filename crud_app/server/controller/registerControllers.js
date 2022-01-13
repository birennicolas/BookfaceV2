const express = require('express')
const User = require('../model/user');
const {ensureAuthenticated} = require("../config/auth")
const bcrypt = require('bcrypt')
const passport = require('passport')

const register_post = (req, res) => {
    const {name, email, password, password2} = req.body;
    const success_msg = [];
    const errors = [];
    console.log(' Name : ' + name+ ' email : ' + email + ' pass : ' + password)

    if(!name || !email || !password || !password2) {
        errors.push({msg : "Please fill in all the fields"})
    }
    
    if(password != password2) {
        errors.push({msg: 'Passwords must match!'})
    }
    
    if(password.length < 6) {
        errors.push({msg: "Password must be at least 6 characters"})
    }

    if(errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    
    } else { 
        User.findOne( {email : email} ).exec((err,user)=>{
            console.log(user)
            if(user) {
                errors.push({msg: "email is already registered"})
                res.render('register', {errors, name, email, password,password2})
            } 
            else { 
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                })
                bcrypt.genSalt(10,(err,salt) => 
                bcrypt.hash(newUser.password,salt,
                    (err,hash)=> {
                        if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                        //save user
                        newUser.save()
                        .then((value)=>{
                            console.log(value)
                            req.flash(success_msg, 'You have been registered successfully')
                            res.redirect('/login');
                        })
                        .catch(value=> console.log(value));
                          
                    }
                ));
            }
        })
    }
}

const register_get = (req, res) => {
    res.render('register', {title: 'Register'})
}

module.exports = {
    register_get,
    register_post
}

// router.get('/register', (req,res)=>{
//     res.render('register')
// })