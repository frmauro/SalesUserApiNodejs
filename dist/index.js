"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import consign from 'consign';
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const userController_1 = __importDefault(require("./controllers/userController"));
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';
// GRPC *******************************************************************
class Index {
    constructor() {
        this.app = express_1.default.application;
        this.port = 8088;
        this.app = (0, express_1.default)();
        this.userController = new userController_1.default(express_1.default.request, express_1.default.response);
        this.userRouter = new userRouter_1.default(this.userController);
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
    router() {
        this.app.use(this.userRouter.getUserRouter);
    }
}
