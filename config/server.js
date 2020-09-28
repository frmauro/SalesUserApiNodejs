var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
//var mongoose = require('mongoose');
//var db = require('./mongodbConnection');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//mongoose.connect(db.uri, { useNewUrlParser: true });

// var Schema = mongoose.Schema;
// var userDataSchema = new Schema({  
//     name: {type: String, required: true},  
//     email: {type: String, required: true},  
//     password: {type: String, required: true},  
//     token: {type: String, required: true},  
//     userType: {type: String, required: true},  
//     status: {type: String, required: true}  
//    }, {collection: 'users'});  
   
//    var Contatos = mongoose.model('UserData', userDataSchema);


consign()
     .include('/routes')
     .then('/controllers')
     .then('/models')
     .into(app);

module.exports = app;