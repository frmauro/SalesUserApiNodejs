import { Router } from 'express';
import UserController from '../controllers/userController';


class UserRouter {
    _userController: UserController;
     router = Router();

    constructor(userController: UserController){
        this._userController = userController;
    }


    getUsers() {
         this.router.get('/users', (req, res) =>{
                    return this._userController.index();
                });
    }
}

export default UserRouter;


// //export const userRouter = Router();


// userRouter.get('/users', function(req, res){
//          return new userController().index(application, req, res);
//      });

//      userRouter.post('/user', function(req, res){
//         return application.controllers.userController.findByEmailAndPassword(application, req, res);
//     });

//     userRouter.post('/create', function(req, res){
//         return application.controllers.userController.create(application, req, res);
//     });


//     userRouter.put('/user', function(req, res){
//         return application.controllers.userController.update(application, req, res);
//     });
