var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var mongoose = require('mongoose');
var db = require('./mongodbConnection');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(db.uri, { useNewUrlParser: true });

consign()
     .include('routes')
     .then('config/mongodbConnection.js')
     .then('models')
     .then('controllers')
     .into(app);

module.exports = app;