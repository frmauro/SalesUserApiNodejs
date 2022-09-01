"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import consign from 'consign';
const cors_1 = __importDefault(require("cors"));
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter_1 = __importDefault(require("../routes/userRouter"));
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';
//var consign = require('consign');
//const swaggerUi = //require('swagger-ui-express'),
//swaggerDocument = require('../swagger.json');
class Server {
    //userRouter: IUserRouter;
    //userController: IUserController;
    constructor() {
        this.app = express_1.default.application;
        this.app = (0, express_1.default)();
        const userController = new userController_1.default(this.app);
        const userRouter = new userRouter_1.default(userController);
        //this.userController = userController;
        //this.userController.setRequest(express.request);
        //this.userController.SetResponse(express.response);
        //this.userRouter = userRouter;
        //this.userRouter.SetController(this.userController);
        //this.userRouter.SetRouter(router);
        this.app.use(userRouter.router);
        this.middleware();
    }
    middleware() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json);
        // CORS ************
        this.app.use(cors_1.default);
        const allowedOrigins = ['*'];
        const options = {
            origin: allowedOrigins
        };
        this.app.use((0, cors_1.default)(options));
        // ******************
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
}
exports.default = Server;
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);
//module.exports = app;
//# sourceMappingURL=server.js.map