
//import { Server }  from "./config/server";
//new Server().listen(8083);

import express from "express";
import  routes  from './routes/routes';
import bodyParser from 'body-parser';
import GrpcUserService from "./grpc/userServiceGrpc";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UserSRVService } from "./proto/user_grpc_pb";
import { promisify } from "util";

const app = express();

// app.get('/test', (req, res) => {
//      res.send('Hello express TS');
// });

const server = new Server();
server.addService(UserSRVService, new GrpcUserService());

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);
//app.use(server);

const port  = process.env.PORT || 8083;
app.listen(port, () => {
    console.log('O servidor HTTP esta escutando a porta: ' + port);

    const bindPromise = promisify(server.bindAsync).bind(server)

    bindPromise('0.0.0.0:50051', ServerCredentials.createInsecure())
      .then((port: any) => {
        console.log(`listening on ${port}`)
        server.start()
      })
      .catch(console.error)

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



