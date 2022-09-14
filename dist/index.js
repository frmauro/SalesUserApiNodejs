"use strict";
//import { Server }  from "./config/server";
//new Server().listen(8083);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const userServiceGrpc_1 = __importDefault(require("./grpc/userServiceGrpc"));
const grpc_js_1 = require("@grpc/grpc-js");
const user_grpc_pb_1 = require("./proto/user_grpc_pb");
const app = (0, express_1.default)();
// app.get('/test', (req, res) => {
//      res.send('Hello express TS');
// });
const server = new grpc_js_1.Server();
server.addService(user_grpc_pb_1.UserSRVService, new userServiceGrpc_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(routes_1.default);
//app.use(server);
const port = process.env.PORT || 8083;
app.listen(port, () => {
    console.log('O servidor HTTP esta escutando a porta: ' + port);
    // const bindPromise = promisify(server.bindAsync).bind(server)
    // bindPromise('0.0.0.0:50051', ServerCredentials.createInsecure())
    //   .then((port: any) => {
    //     console.log(`listening on ${port}`)
    //     server.start()
    //   })
    //   .catch(console.error)
});
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