"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userrouter = (0, express_1.Router)();
userrouter.get('/', (req, res) => {
    return res.status(200).json(userController_1.default.index(res));
});
exports.default = userrouter;
// //@injectable()
// class UserRouter  {
//      router = Router()
//     constructor(){
//         this.initRoutes();
//     }
//     initRoutes() {
//         this.router.get('/users', userController.index)
//     }
// }
// export default new UserRouter();
//# sourceMappingURL=userRouter.js.map