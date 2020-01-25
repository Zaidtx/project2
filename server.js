const express = require('express');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// not sure if the next line is required or what it is for 
app.use(express.static(__dirname + '/public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});


server.listen(PORT, function () {
    console.log('app listening on PORT: ' + PORT);
});
