const User = require('../model/user');
const {ensureAuthenticated} = require("../config/auth")

const login_get = (req, res) => {
    res.render('login', {title : 'Login'});
    // res.render('login', {title : 'Login', errors});
}
const login_post = (req, res) => {
    res.render('login');
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    }) (req,res,next)
}

module.exports = {
    login_get,
    login_post,
}