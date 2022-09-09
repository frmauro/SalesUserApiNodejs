//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
import { Router } from 'express';
import userController from '../controllers/userController';

const userrouter: Router = Router();

// userrouter.get('/users', (req, res) => {
//     return res.status(200).send(userController.index);
//  });
export { userrouter };


// //@injectable()
// class UserRouter  {
//      router = Router()

//     constructor(){
//         this.initRoutes();
//     }

//     initRoutes() {
//         this.router.get('/users', userController.index)
//     }

// }

// export default new UserRouter();


