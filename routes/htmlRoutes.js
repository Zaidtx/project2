const path = require('path');

module.exports = function(app){
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home_page.html'));
    });

    app.get('/create', function(req, res){
        res.sendFile(path.join(__dirname, '../public/account_create_page.html'));
    });

    app.get('/transfer', function(req, res){
        res.sendFile(path.join(__dirname, '../public/transfer_page.html'));
    });
};