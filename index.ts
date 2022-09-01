import { createServer } from "http";
import Server from "./config/server";
import { IUserController } from "./controllers/IUserController";
import UserController from "./controllers/userController";
import container from "./di-container";
import { IUserRouter } from "./routes/IUserRouter";
import UserRouter from "./routes/userRouter";
import TYPES from "./types";


export class Index{
        
        
        port: Number = 8083;

        constructor(){
                //this.createDependencies();
                this.createServer();
        }


        createDependencies(){
                //const userController = container.get<IUserController>(TYPES.IUserController);
                //const userRouter = container.get<IUserRouter>(TYPES.IUserRouter);
                //this.createServer(userController, userRouter);
        }
        createServer(): void{
                var server: Server = new Server();
                //server.app.use(UserRouter);
                server.app.listen(this.port);
                console.log(`Server listening at port: ${this.port}`);
        }

        // constructor(){
        //         this.userController = container.get<IUserController>(TYPES.IUserController);
        //         this.server = new Server(this.userController);
        //         this.server.app.listen(this.port, () => {
        //                 console.log(`Server listening at port: ${this.port}`);
        //                 console.log('Server GRPC - running at http://0.0.0.0:50051');     
        //         });
        //  }

        
        // GRPC *******************************************************************
        // app.listen(port, function() {
        //         console.log('Server GRPC - running at http://0.0.0.0:50051')
        //         var server =  app.grpc.userServiceGrpc.grpcservice(app);
        //         server.start();
        //         console.log('O servidor HTTP esta escutando a porta: ' + port);
        // });

}

export default new Index();



