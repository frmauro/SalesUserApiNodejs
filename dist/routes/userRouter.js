"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRouter {
    constructor(userController) {
        this.router = (0, express_1.Router)();
        this._userController = userController;
    }
    get getUserRouter() {
        return this.router;
    }
    getUsers() {
        this.router.get('/users', () => {
            return this._userController.index();
        });
    }
    findByEmailAndPassword() {
        return this.router.post('/user', () => {
            return this._userController.findByEmailAndPassword();
        });
    }
    create() {
        this.router.post('/create', () => {
            this._userController.create();
        });
    }
    update() {
        return this.router.put('/user', () => {
            return this._userController.update();
        });
    }
}
exports.default = UserRouter;
