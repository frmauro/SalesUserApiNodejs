"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userrouter = void 0;
//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userrouter = (0, express_1.Router)();
exports.userrouter = userrouter;
userrouter.get('/users', (req, res) => {
    return res.json(userController_1.default.index);
});
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