

import express from "express";
import  routes  from './routes/routes';
import bodyParser from 'body-parser';
import GrpcUserService from "./grpc/userServiceGrpc";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UserServiceService } from "./proto/user_grpc_pb";
import { promisify } from "util";

// const app = express();

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(routes);

const server = new Server();
server.addService(UserServiceService, new GrpcUserService());

 server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), (err, port) => {
    if (err) throw err
    console.log(`GRPC server is running on 0.0.0.0:${port}`);
    server.start();
 });

 //app.listen(port, () => {
//console.log('O servidor HTTP esta escutando a porta: ' + port);
//console.log('O servidor GRPC esta escutando a porta: 50051');
//server.start();
//});




