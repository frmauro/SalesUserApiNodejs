"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//@injectable()
class UserRouter {
    constructor(userController) {
        this._userController = userController;
        this.router = express_1.default.Router();
        this.getUsers;
    }
    // SetRouter(router: IRouter): void {
    //     this.router = router; 
    //     //throw new Error('Method not implemented.');
    // }
    // SetController(controller: IUserController): void {
    //     this._userController = controller;
    // }
    // get getUserRouter(): Router{
    //     return this.router;
    // }
    getUsers() {
        this.router.get('/users', () => {
            return this._userController.index();
        });
    }
    findByEmailAndPassword() {
        this.router.post('/user', () => {
            return this._userController.findByEmailAndPassword();
        });
    }
    create() {
        this.router.post('/create', () => {
            this._userController.create();
        });
    }
    update() {
        this.router.put('/user', () => {
            return this._userController.update();
        });
    }
}
exports.default = UserRouter;
//# sourceMappingURL=userRouter.js.map