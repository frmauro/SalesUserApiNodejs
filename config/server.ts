import express, { json } from "express";
//import bodyParser from "body-parser";
//import consign from 'consign';
import cors from 'cors'; 
import { injectable } from "inversify";
//import userController from "../controllers/userController";
import userRouter from "../routes/userRouter";
//import testRouter from "../routes/testRouter";
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';

//var consign = require('consign');

//const swaggerUi = //require('swagger-ui-express'),
 //swaggerDocument = require('../swagger.json');

 
export class Server{

  public express = express.application;
 

  constructor(){
    this.express = express();
    this.express.use(json);
    this.express.get('/test', (req, res) => {
      res.send('Hello express !!!');
    })
    //this.express.use(testRouter.router);
    //this.middleware();
    //this.routes();
  }

    //middleware(){

      //this.express.use(bodyParser.urlencoded({extended:true}));
      //this.express.use(bodyParser.json);
      //this.express.use(json);

      // // CORS ************
      // this.express.use(cors)
      // const allowedOrigins = ['*'];
      // const options: cors.CorsOptions = {
      // origin: allowedOrigins
      // };
      // this.express.use(cors(options));
      // // ******************

      // this.express.use(function(req, res, next) {
      // res.header("Access-Control-Allow-Origin", "*");
      // res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
      // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      // next();
      // });
  //}

  // routes() {
  //   //this.express.use(userRouter.router);
  //   this.express.use(testRouter.router);
  // }

  listen(port: number) {
    this.express.listen(port);
  }

}


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//module.exports = app;