const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

let Transaction = sequelize.define('transaction', {
    username: Sequelize.STRING,
    contactName: Sequelize.STRING,
    date: Sequelize.DATE,
    amount: Sequelize.INTEGER, 
    type: Sequelize.STRING, 
    message: Sequelize.STRING
});

Transaction.sync();

module.exports = Transaction;