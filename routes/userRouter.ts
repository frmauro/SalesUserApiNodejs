import { Router } from 'express';
import UserController from '../controllers/userController';
import User from '../models/user';


class UserRouter {
    _userController: UserController;
     router = Router();

    constructor(userController: UserController){
        this._userController = userController;
    }

    get getUserRouter(): Router{
        return this.router;
    }


    getUsers() {
         this.router.get('/users', () =>{
                    return this._userController.index();
                });
    }

    findByEmailAndPassword() {
        return this.router.post('/user', () => {
                return this._userController.findByEmailAndPassword();
        });
    }

    create(): void {
        this.router.post('/create', () => {
             this._userController.create();
        });
    } 


    update(): any {
        return this.router.put('/user', () => {
            return this._userController.update();
        });
    }
}

export default UserRouter;


