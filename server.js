const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const app = express();

const server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// not sure if the next line is required or what it is for 
app.use(express.static(__dirname + '/public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


server.listen(PORT, function () {
    console.log('app listening on PORT: ' + PORT);
});

