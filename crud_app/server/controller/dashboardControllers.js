// router.get('/dashboard', ensureAuthenticated,(req,res)=>{
//     res.render('dashboard',{
//         user: req.user
//     })
// })
// const {ensureAuthenticated} = require("../config/auth")

const dashboard_get = (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
}

module.exports = {
    dashboard_get
}