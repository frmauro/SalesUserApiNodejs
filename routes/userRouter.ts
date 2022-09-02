import express, { IRouter, Router } from 'express';
import { injectable } from 'inversify';
import { IUserController } from '../controllers/IUserController';
import userController from '../controllers/userController';
import { IUserRouter } from './IUserRouter';

//@injectable()
class UserRouter  {
     router = Router()

    constructor(){
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/users', userController.index)
    }
    // SetRouter(router: IRouter): void {
    //     this.router = router; 
    //     //throw new Error('Method not implemented.');
    // }

    // SetController(controller: IUserController): void {
    //     this._userController = controller;
    // }

    // get getUserRouter(): Router{
    //     return this.router;
    // }


    // getUsers(): void  {
    //      this.router.get('/users', () =>{
    //                 return this._userController.index();
    //             });
    // }

    // findByEmailAndPassword(): void {
    //      this.router.post('/user', () => {
    //             return this._userController.findByEmailAndPassword();
    //     });
    // }

    // create(): void {
    //     this.router.post('/create', () => {
    //          this._userController.create();
    //     });
    // } 


    // update(): void {
    //     this.router.put('/user', () => {
    //         return this._userController.update();
    //     });
    // }
}

export default new UserRouter();


