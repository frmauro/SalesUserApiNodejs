//import express, { IRouter, Router } from 'express';
//import { injectable } from 'inversify';
import { Router } from 'express';
import userController from '../controllers/userController';

const userrouter = Router();

userrouter.get('/', async (req, res) => {
    const listUsers = await userController.index();
    return res.status(200).json(listUsers);
 });


 userrouter.post('/', async (req, res) => {
    const result = await userController.create(req, res);
    return res.status(200).json(result);
 });


 userrouter.put('/', async (req, res) => {
    const result = await userController.update(req, res);
    return res.status(200).json(result);
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


