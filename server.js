const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const = require("./models");

app.use(expres.urlencoded({ extended: true }));
app.use(express.jason());

app.use(express.static("public"));


require("./")