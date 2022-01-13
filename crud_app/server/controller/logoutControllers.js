const logout_get = (req, res) => {
    req.logout()
    req.flash('success_msg', "You're logged out!")
    res.redirect('/users/login')
}

module.exports = {
    logout_get
}