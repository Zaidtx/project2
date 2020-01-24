const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

let Transaction = sequelize.define('transaction', {
    routeName: Sequelize.STRING, 
    // user: Sequelize.STRING,  should this be added to be able to join the user to further data?
    recipient: Sequelize.STRING, 
    date: Sequelize.DATE,
    amount: Sequelize.INTEGER, 
});

Transaction.sync();

module.exports = Transaction;