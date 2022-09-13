//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
import { Router } from 'express';
import userController from '../controllers/userController';

const userrouter = Router();

userrouter.get('/', async (req, res) => {
    const listUsers = await userController.index();
    return res.status(200).json(listUsers);
 });


export default userrouter;


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


