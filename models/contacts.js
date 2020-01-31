const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

let Contact = sequelize.define('contact',  {
    username: Sequelize.STRING,
    contactName: Sequelize.STRING,
    phoneNumber: Sequelize.INTEGER,
    email: Sequelize.STRING
});

Contact.sync();


module.exports = Contact;