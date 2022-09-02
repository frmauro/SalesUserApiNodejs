"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const server_1 = __importDefault(require("./config/server"));
class Index {
    constructor() {
        this.port = 8083;
        this.createServer();
    }
    createServer() {
        server_1.default.listen(this.port);
        console.log(`Server listening at port: ${this.port}`);
    }
}
exports.Index = Index;
exports.default = new Index();
//# sourceMappingURL=index.js.map