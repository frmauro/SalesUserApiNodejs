var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

consign()
     .include('/routes')
     .then('/controllers')
     .then('/models')
     .into(app);

module.exports = app;