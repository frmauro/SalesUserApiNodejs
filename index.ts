
import Server from "./config/server";


export class Index{
        
        port: number = 8083;

        constructor(){
             this.createServer();
        }

        createServer(): void{
                Server.listen(this.port);
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



