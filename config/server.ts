import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
//import consign from 'consign';
import cors from 'cors'; 
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';

//var bodyParser = require('body-parser');
//var consign = require('consign');
//var cors = require('cors');


//const swaggerUi = //require('swagger-ui-express'),
 //swaggerDocument = require('../swagger.json');


const app: Express = express();

// CORS ************
app.use(cors)
const allowedOrigins = ['*'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
// ******************

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
  });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);

module.exports = app;