var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var banco = require('./dbConnection');
var load = require('express-load');

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('port', 3000);

app.set("view engine", "ejs");

load('models').then('controllers').then('routes').into(app);

module.exports = app;