import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
//import consign from 'consign';
import cors from 'cors'; 
import  UserRouter from "./routes/userRouter";
import UserController from "./controllers/userController";
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../swagger.json';


// GRPC *******************************************************************

class Index{

        public app = express.application;
        port: number = 8088;
        userRouter!: UserRouter;
        userController!: UserController;

        constructor(){
                this.app = express();
                this.userController = new UserController(express.request, express.response);
                this.userRouter = new UserRouter(this.userController);
        }

        private middleware(){

                this.app.use(bodyParser.urlencoded({extended:true}));
                this.app.use(bodyParser.json);

                // CORS ************
                this.app.use(cors)
                const allowedOrigins = ['*'];
                const options: cors.CorsOptions = {
                origin: allowedOrigins
                };
                this.app.use(cors(options));
                // ******************
        
                this.app.use(function(req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
                });
        }

        private router(){
                this.app.use(this.userRouter.getUserRouter);
        }
        // app.listen(port, function() {
        //         console.log('Server GRPC - running at http://0.0.0.0:50051')
        //         var server =  app.grpc.userServiceGrpc.grpcservice(app);
        //         server.start();
        //         console.log('O servidor HTTP esta escutando a porta: ' + port);
        // });

}



