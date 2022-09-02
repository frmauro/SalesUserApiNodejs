"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import consign from 'consign';
const cors_1 = __importDefault(require("cors"));
//import userController from "../controllers/userController";
const userRouter_1 = __importDefault(require("../routes/userRouter"));
const testRouter_1 = __importDefault(require("../routes/testRouter"));
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';
//var consign = require('consign');
//const swaggerUi = //require('swagger-ui-express'),
//swaggerDocument = require('../swagger.json');
class Server {
    constructor() {
        this.express = express_1.default.application;
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
        this.express.use(body_parser_1.default.json);
        // CORS ************
        this.express.use(cors_1.default);
        const allowedOrigins = ['*'];
        const options = {
            origin: allowedOrigins
        };
        this.express.use((0, cors_1.default)(options));
        // ******************
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    routes() {
        this.express.use(userRouter_1.default.router);
        this.express.use(testRouter_1.default.router);
    }
    listen(port) {
        this.express.listen(port);
    }
}
exports.default = new Server();
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);
//module.exports = app;
//# sourceMappingURL=server.js.map