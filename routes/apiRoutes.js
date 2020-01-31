const User = require('../models/users');
const Contact = require('../models/contacts.js');
const Transaction = require('../models/transactions.js');
const Ticker = require('../models/ticker');
const Auth = require('../models/auth');
const bcrypt = require('bcrypt');

module.exports = function(app){
    // getting data to show all contacts available 
    app.get('/api/contact', function(req, res){
        Contact.findAll().then(function(result){
            return res.json(result);
        });
    });


    app.get('/api/transaction', function(req, res){
        Transaction.findAll().then(function(result){
            return res.json(result);
        });
    });



    // need to add the + id to filer look at Blog CRUD
    app.get('/api/user/balance', function(req, res){
        User.findAll().then(function(result){
            return res.json(result);
        });
    });


    // for auths get
    app.get('/api/user/create', function(req, res){
        Auth.findAll().then(function(result){
            return res.json(result);
        });
    });


    app.get('/api/user', function(req, res){
        Auth.findOne({ 
            where: {
            username: user.username
        }}).then(function(result){
            return res.json(result);
        });
    });


    // update the balance when needed
    app.put('/api/user/balance', function(req, res){
        User.update(
            { accountBalance: req.body.accountBalance},
            { where: {id: 1}}
            ).success (result =>
                handleResult(result))
                .error(err =>
                    handleError(err));
    });


    // add a new contact
    app.post('/api/contact', function(req, res){
        let contact = req.body;

        Contact.create({
            username: contact.username,
            contactName: contact.contactName,
            phoneNumber : contact.phoneNumber,
            email: contact.email
        });

        res.status(204).end();
    });

    // send a transaction 
    app.post('/api/transaction', function(req, res){
        let transaction = req.body;

        Transaction.create({
            username: transaction.username,
            contactName: transaction.contactName,
            amount: transaction.amount,
            type: transaction.type,
            message: transaction.message
        });

        res.status(204).end();
    });

    // send a new stock call 
    app.post('/api/newTicker', function(req, res){
        let ticker = req.body;

        Ticker.create({
            username: ticker.username,
            tickerSymbol: ticker.tickerSymbol, 
            quantity: ticker.quantity, 
            amountBuy: ticker.amountBuy, 
            amountSell: ticker.amountSell
        });

        res.status(204).end();
    });


    // // passport
    app.post('/api/user/create', async function(req, res){
        let auth = req.body;

        bcrypt.hash(auth.password, 10, function(err, hash){
            Auth.create({
                name: auth.name,
                username: auth.username, 
                password: hash
            }).then(function(data){
                if(data){
                    res.redirect('/');
                }
            });
        });
    });

    // checking with passport ?
    app.post('/api/user', function(user){{
            if(!user){
                res.redirect('/');
            } else {
                bcrypt.compare(auth.password, user.password, function(err, result){
                    if (result == true){
                        res.redirect('/home');
                    } else {
                        console.log('incorrect password');
                        res.redirect('/');
                    }
                });
            }
        };
    });
};