import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
//import consign from 'consign';
import cors from 'cors'; 
import { IUserController } from "../controllers/IUserController";
import { IUserRouter } from "../routes/IUserRouter";
import { IServer } from "./IServer";
import { injectable } from "inversify";
//import userController from "../controllers/userController";
import userRouter from "../routes/userRouter";
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';

//var consign = require('consign');

//const swaggerUi = //require('swagger-ui-express'),
 //swaggerDocument = require('../swagger.json');

 
class Server{

  public express = express.application;
 

  constructor(){
    this.express = express();
    //const userController = new UserController(this.app);
    //const userRouter = new UserRouter(userController);
    //this.app.use(userRouter.router);
    this.middleware();
    this.routes();
  }

    middleware(){

      this.express.use(bodyParser.urlencoded({extended:true}));
      this.express.use(bodyParser.json);

      // CORS ************
      this.express.use(cors)
      const allowedOrigins = ['*'];
      const options: cors.CorsOptions = {
      origin: allowedOrigins
      };
      this.express.use(cors(options));
      // ******************

      this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
      });
  }

  routes() {
    this.express.use(userRouter.router);
  }

  listen(port: number) {
    this.express.listen(port);
  }

}

export default new Server();


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);

//module.exports = app;