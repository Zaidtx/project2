const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const app = express();
const session = require('express-session');
const env = require('dotenv');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000
const db = require("./models");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static('public'));


// For Handlebars
app.engine(`handlebars`, exphbs({
    defaultLayout: `main`
}));
app.set(`view engine`, `handlebars`);

// ROUTES
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
require('./routes/passport.js')(passport, db.user);
require('./routes/auth.js')(app, passport);

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});






