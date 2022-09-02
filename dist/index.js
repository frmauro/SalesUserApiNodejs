"use strict";
//import { Server }  from "./config/server";
//new Server().listen(8083);
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const testRouter_1 = require("./routes/testRouter");
const userRouter_1 = require("./routes/userRouter");
const app = (0, express_1.default)();
// app.get('/test', (req, res) => {
//      res.send('Hello express TS');
// });
app.use(express_1.json);
app.use(testRouter_1.testrouter);
app.use(userRouter_1.userrouter);
const port = process.env.PORT || 8083;
app.listen(port, () => console.log('O servidor HTTP esta escutando a porta: ' + port));
//console.log('O servidor HTTP esta escutando a porta: ' + port);
// export class Index{
//         port: number = 8083;
//         constructor(){
//              this.createServer();
//         }
//         createServer(): void{
//                 Server.listen(this.port);
//                 console.log(`Server listening at port: ${this.port}`);
//         }
//         // constructor(){
//         //         this.userController = container.get<IUserController>(TYPES.IUserController);
//         //         this.server = new Server(this.userController);
//         //         this.server.app.listen(this.port, () => {
//         //                 console.log(`Server listening at port: ${this.port}`);
//         //                 console.log('Server GRPC - running at http://0.0.0.0:50051');     
//         //         });
//         //  }
//         // GRPC *******************************************************************
//         // app.listen(port, function() {
//         //         console.log('Server GRPC - running at http://0.0.0.0:50051')
//         //         var server =  app.grpc.userServiceGrpc.grpcservice(app);
//         //         server.start();
//         //         console.log('O servidor HTTP esta escutando a porta: ' + port);
//         // });
// }
// export default new Index();
//# sourceMappingURL=index.js.map