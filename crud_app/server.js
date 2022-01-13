// Nico's code
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
// Brigita's code
// const expressEjsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require("./server/config/passport")

const connectDB = require('./server/database/connection');

// Teo's code
const postRoutes = require('./server/routes/postRoutes')
const profilRoutes = require('./server/routes/profilRoutes');
const loginRoutes = require('./server/routes/loginRoutes');
const registerRoutes = require('./server/routes/registerRoutes');
const welcomeRoutes = require('./server/routes/welcomeRoutes');
const logoutRoutes = require('./server/routes/logoutRoutes');
const dashboardRoutes = require('./server/routes/dashboardRoutes');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// render CSS and other static files //
app.use(express.static('public'));

// load routers
app.use('/', require('./server/routes/router'))

// Teo's routes
app.use('/the_hall', postRoutes)
app.use('/the_floor', profilRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/welcome', welcomeRoutes)
// Where to put these routes ? In the hall or the login page ?
app.use('/logout', logoutRoutes)
app.use('/dashboard', dashboardRoutes)

// Brigita's  routes
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized : true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg= req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})


// app.use('/welcome', require('./server/index'), require('./server/users'))
// app.use('/login', require('./server/index'), require('./server/users'))
// app.use('/users', require('./server/index'), require('./server/users'))

// app.use('/login',require('./server/users'))
// app.use('/users',require('./server/index'))



app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});