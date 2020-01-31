const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

let Ticker = sequelize.define('ticker', {
    username: Sequelize.STRING,
    tickerSymbol: Sequelize.STRING,
    quantity: Sequelize.INTEGER, 
    amountBuy: Sequelize.INTEGER,
    amountSell : Sequelize.INTEGER
})

Ticker.sync();

module.exports = Ticker;



