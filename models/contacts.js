const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

let Contact = sequelize.define('contact', {
    routeName: Sequelize.STRING, 
    name: Sequelize.STRING,
    phoneNumber: Sequelize.INTEGER,
    email: Sequelize.STRING
});

// let Transaction = sequelize.define('transaction', {
//     routeName: Sequelize.STRING, 
//     recipient: Sequelize.STRING, 
//     date: Sequelize.DATE,
//     amount: Sequelize.INTEGER, 
// });

Contact.sync();


module.exports = Contact;

// why can't I have several exports for example 
// module.exports = {Contact, Transaction};