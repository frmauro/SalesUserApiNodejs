import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
//import consign from 'consign';
import cors from 'cors'; 
import { IUserController } from "../controllers/IUserController";
import { IUserRouter } from "../routes/IUserRouter";
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';

//var consign = require('consign');

//const swaggerUi = //require('swagger-ui-express'),
 //swaggerDocument = require('../swagger.json');

class Server{

  public app = express.application;
  userRouter: IUserRouter;
  userController: IUserController;


  constructor(userController: IUserController, userRouter: IUserRouter){
    this.app = express();
    this.userController = userController;
    this.userController.setRequest(express.request);
    this.userController.SetResponse(express.response);
    this.userRouter = userRouter;
    this.userRouter.SetController(this.userController);
    this.userRouter.SetRouter(userRouter);
    this.app.use(this.userRouter.getUsers);
    this.middleware();
  }


  private middleware(){

    this.app.use(bodyParser.urlencoded({extended:true}));
    this.app.use(bodyParser.json);

    // CORS ************
    this.app.use(cors)
    const allowedOrigins = ['*'];
    const options: cors.CorsOptions = {
    origin: allowedOrigins
    };
    this.app.use(cors(options));
    // ******************

    this.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
}

  // private router(){
  //     this.app.use(this.userRouter.getUserRouter);
  // }

}

export default Server;


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);

//module.exports = app;