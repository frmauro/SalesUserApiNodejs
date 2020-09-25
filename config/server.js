var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


consign()
     .include('routes')
     .then('config/mongodbConnection.js')
     .then('models')
     .then('controllers')
     .into(app);

module.exports = app;