"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const server_1 = __importDefault(require("./config/server"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
class Index {
    constructor() {
        this.port = 8083;
        //this.createDependencies();
        this.createServer();
    }
    createDependencies() {
        //const userController = container.get<IUserController>(TYPES.IUserController);
        //const userRouter = container.get<IUserRouter>(TYPES.IUserRouter);
        //this.createServer(userController, userRouter);
    }
    createServer() {
        var server = new server_1.default();
        server.app.use(userRouter_1.default);
        server.app.listen(this.port);
        console.log(`Server listening at port: ${this.port}`);
    }
}
exports.Index = Index;
exports.default = new Index();
//# sourceMappingURL=index.js.map