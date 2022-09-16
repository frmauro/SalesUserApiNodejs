"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userServiceGrpc_1 = __importDefault(require("./grpc/userServiceGrpc"));
const grpc_js_1 = require("@grpc/grpc-js");
const user_grpc_pb_1 = require("./proto/user_grpc_pb");
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(routes);
const server = new grpc_js_1.Server();
server.addService(user_grpc_pb_1.UserServiceService, new userServiceGrpc_1.default());
server.bindAsync('localhost:50051', grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
    if (err)
        throw err;
    console.log(`GRPC server is running on 0.0.0.0:${port}`);
    server.start();
});
//app.listen(port, () => {
//console.log('O servidor HTTP esta escutando a porta: ' + port);
//console.log('O servidor GRPC esta escutando a porta: 50051');
//server.start();
//});
//# sourceMappingURL=index.js.map