
//import { Server }  from "./config/server";
//new Server().listen(8083);

import express from "express";
import  routes  from './routes/routes';
import bodyParser from 'body-parser';

const app = express();

// app.get('/test', (req, res) => {
//      res.send('Hello express TS');
// });

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);
//app.use(userrouter);

const port  = process.env.PORT || 8083;
app.listen(port, () => {
    console.log('O servidor HTTP esta escutando a porta: ' + port);
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



