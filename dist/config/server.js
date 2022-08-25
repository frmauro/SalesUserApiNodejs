"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import consign from 'consign';
const cors_1 = __importDefault(require("cors"));
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';
//var consign = require('consign');
//const swaggerUi = //require('swagger-ui-express'),
//swaggerDocument = require('../swagger.json');
const app = (0, express_1.default)();
// CORS ************
app.use(cors_1.default);
const allowedOrigins = ['*'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
// ******************
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// consign()
//      .include('/routes')
//      .then('/controllers')
//      .then('/models')
//      .then('/grpc')
//      .into(app);
module.exports = app;
