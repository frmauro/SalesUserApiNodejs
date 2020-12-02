var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var cors = require('cors');
const swaggerUi = require('swagger-ui-express'),
 swaggerDocument = require('../swagger.json');

var app = express();
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
  });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

consign()
     .include('/routes')
     .then('/controllers')
     .then('/models')
     .into(app);

module.exports = app;