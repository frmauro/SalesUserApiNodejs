"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const server_1 = __importDefault(require("./config/server"));
const di_container_1 = __importDefault(require("./di-container"));
const types_1 = __importDefault(require("./types"));
class Index {
    constructor() {
        this.port = 8083;
        this.createDependencies();
    }
    createDependencies() {
        const userController = di_container_1.default.get(types_1.default.IUserController);
        const userRouter = di_container_1.default.get(types_1.default.IUserRouter);
        this.createServer(userController, userRouter);
    }
    createServer(userController, userRouter) {
        var server = new server_1.default(userController, userRouter);
        server.app.listen(this.port);
        console.log(`Server listening at port: ${this.port}`);
    }
}
exports.Index = Index;
exports.default = new Index();
//# sourceMappingURL=index.js.map