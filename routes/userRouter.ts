import { Router } from 'express';
import { injectable } from 'inversify';
import { IUserController } from '../controllers/IUserController';
import { IUserRouter } from './IUserRouter';

@injectable()
class UserRouter implements IUserRouter {
    _userController: any;
    _router: any;

    constructor(){}
    SetRouter(router: IUserRouter): void {
        this._router = router; 
        //throw new Error('Method not implemented.');
    }

    SetController(controller: IUserController): void {
        this._userController = controller;
    }

    get getUserRouter(): Router{
        return this._router;
    }


    getUsers(): any  {
         this._router.get('/users', () =>{
                    return this._userController.index();
                });
    }

    findByEmailAndPassword(): any {
        return this._router.post('/user', () => {
                return this._userController.findByEmailAndPassword();
        });
    }

    create(): void {
        this._router.post('/create', () => {
             this._userController.create();
        });
    } 


    update(): any {
        return this._router.put('/user', () => {
            return this._userController.update();
        });
    }
}

export default UserRouter;


