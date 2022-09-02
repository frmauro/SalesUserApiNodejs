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

}

export default new UserRouter();


