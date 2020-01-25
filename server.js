//loginserver
const express = require('express');
const sequelize = require('sequelize');
const db = require('./models');
const bodyParser = require("body-parser");
const session = require("express-session");
const passport= require("./config/passport");

const PORT = process.env.PORT || 8080;

const app = express();


const server = require('http').createServer(app);
const io = require('socket.io')(server);


// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Requiring our routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});

db.sequelize.sync().then(function(){
    server.listen(PORT, function () {
        console.log('app listening on PORT: ' + PORT);
    });
})
