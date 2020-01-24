const Contact = require('../models/contacts.js');
const Transaction = require('../models/transactions.js');
module.exports = function(app){
    // getting data to live search ..
    app.get('/api', function(req, res){
        Contact.findAll().then(function(result){
            return res.json(result);
        });
    });

    // rendering the data to the div below search bar ..
    app.post('/api/users', function(req, res){
        let a = req.body;
        console.log(res.json(a));
        
        characters.push(a);

        console.log(characters);

        // i really don't know wtf is going on here 
    });

    // add a new contact
    app.post('/api/newContact', function(req, res){
        let contact = req.body;
        let routeName = contact.name.replace(/\s+/g, '').toLowerCase();

        Contact.create({
            routeName: routeName, 
            name: contact.name,
            phoneNumber : contact.phoneNumber,
            email: contact.email
        });

        res.status(204).end();
    });

    // send a transaction 
    app.post('/api/newTransaction', function(req, res){
        let transaction = req.body;
        let routeName = transaction.name.replace(/\s+/g, '').toLowerCase();

        Transaction.create({
            routeName: routeName, 
            name: transaction.name,
            date: transaction.date, 
            amount: transaction.amount
        });

        res.status(204).end();
    })
};




// _____________MAKAH

var db= require("../models");
var passport= require("../config/passport");
module.exports = function(app){
    //if he enters wrong info he will be sent to the members page
    app.post("/api/login", passport.authenticate("local"), function(req, res){
res.json("/members");
    });
//this is for signing up the user if he was successful then he'll be logged in otherwise he'll have an error
app.post("/api/signup", function(req, res){
    console.log(req.body);
    db.user.create({
        email:req.body.email,
        password:req.body.password
    }).then(function(){
        res.redirect(307, "/api/login");
    }).catch(function(error){
        console.log(error);
        res.json(error);
    });
});
//now this is for loggin out the user
app.get("logout", function(req, res){
    req.logout();
    res.redirect("/");
});
//this is for the client side
app.get("/api/user_data", function(req,res){
    if (!req.user){
        //send back empty obj if not logged in
        res.json({});
    }
    else{
        //sending back a password, even a hashed password, isn't a good idea
        res.json({
            email:req.user.email,
            id:req.user.id
        });
    }
});
};