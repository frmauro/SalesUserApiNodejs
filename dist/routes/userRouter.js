"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let UserRouter = class UserRouter {
    constructor() { }
    SetRouter(router) {
        this._router = router;
        //throw new Error('Method not implemented.');
    }
    SetController(controller) {
        this._userController = controller;
    }
    get getUserRouter() {
        return this._router;
    }
    getUsers() {
        this._router.get('/users', () => {
            return this._userController.index();
        });
    }
    findByEmailAndPassword() {
        return this._router.post('/user', () => {
            return this._userController.findByEmailAndPassword();
        });
    }
    create() {
        this._router.post('/create', () => {
            this._userController.create();
        });
    }
    update() {
        return this._router.put('/user', () => {
            return this._userController.update();
        });
    }
};
UserRouter = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserRouter);
exports.default = UserRouter;
//# sourceMappingURL=userRouter.js.map