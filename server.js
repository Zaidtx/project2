var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv')
var exphbs = require('express-handlebars')

var TeleSignSDK = require('telesignsdk');
var client  = new TeleSignSDK("13627871-8397-47F8-9C50-4E710B3CC1DE", "GNM5wQGLCETZoz6qlhVnGj5HN4dme131t7fxaE2E2m+G28k/mIRAiBedaA6Ix8DPOr03R98mQl/2O0yYnpUvfQ==");

callback = function(err, resBody){
    if(err){
        console.log(err)
    }else{
        console.log("success!!");
        console.log(resBody);
    }
}


app.use(express.static(__dirname+ "/public" ));
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
 
// //For Handlebars
// app.set('views', './app/views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');
 
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);
 
app.get('/', function(req, res) {

    res.render('first');

});
app.get('/login', function(req, res) {
    client.sms.message(callback,"+18329023510", "Someone logged in into your account", "MKT" );
 

    res.render('login');

 
});

app.get('/signup', function(req, res) {
    client.sms.message(callback,"+18329023510", "thank you for signing up", "MKT" );


    res.render('signup');

 
});
app.get('/dashboard', function(req, res) {

    res.render('dashboard');

 
});

app.get('/logout', function(req, res) {

    res.render('logout');

 
});



 
//Models
var models = require("./app/models");

 
//Routes
 
var authRoute = require('./app/routes/auth.js')(app, passport);
 
 
//load passport strategies
 
require('./app/config/passport/passport.js')(passport, models.user);
 

//Sync Database

 
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


 const PORT = process.env.PORT || 3000
app.listen(PORT , function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
});