"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userrouter = (0, express_1.Router)();
userrouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield userController_1.default.index();
    return res.status(200).json(listUsers);
}));
userrouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController_1.default.create(req, res);
    return res.status(200).json(result);
}));
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