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