"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importStar(require("express"));
//import userController from "../controllers/userController";
//import userRouter from "../routes/userRouter";
//import testRouter from "../routes/testRouter";
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';
//var consign = require('consign');
//const swaggerUi = //require('swagger-ui-express'),
//swaggerDocument = require('../swagger.json');
class Server {
    constructor() {
        this.express = express_1.default.application;
        this.express = (0, express_1.default)();
        this.express.use(express_1.json);
        this.express.get('/test', (req, res) => {
            res.send('Hello express !!!');
        });
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
    listen(port) {
        this.express.listen(port);
    }
}
exports.Server = Server;
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//module.exports = app;
//# sourceMappingURL=server.js.map