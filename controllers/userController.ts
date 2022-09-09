import { fromJSON } from '@grpc/proto-loader';
import UserMongoose from '../models/DB/userMongosse'
import User from '../models/user';
import jwt from 'jsonwebtoken';
import JwtSecretKey from '../config/jwtSecretKey';
import { IUserController } from './IUserController';
import { injectable, inject } from 'inversify';
import "reflect-metadata";
import TYPES from '../types';
import { Request, Response } from 'express';

 //@injectable()
 class UserController  {

  jwtSecretKey: JwtSecretKey = new JwtSecretKey();

   constructor(){}


   index(res: Response)  {
    const userMongoose = new UserMongoose();
    userMongoose.connect();
    const model = userMongoose.getUserModel;
    const userSchema = userMongoose.getUserSchema;
    var users = model('users', userSchema, 'users');

    return users.find({}, (err: any, result: any) => {
          if (err) {
            console.log(err);
          } else {
            return res.json(result);
          }
        });
    }


  // findByEmailAndPassword(req: Request, res: Response): string{
    
  //     const userMongoose = new UserMongoose();
  //     const model = userMongoose.getUserModel;
  //     const userSchema = userMongoose.getUserSchema;

  //     var email = req.body.email;
  //     var password = req.body.password;
  //     var users = model('users', userSchema, 'users');

  //    return users.find({email: email, password: password}, (err: any, result: any) => {
  //                     if (err) {
  //                       console.log("Error! " + err.message);
  //                       return err;
  //                   }
  //                   else {
  //                       if (result.length === 0){
  //                         res.json("user not exists");
  //                         return "user not exists";
  //                       }else{
  //                         let token = jwt.sign({password: password},  this.jwtSecretKey.getSecretKey,{ expiresIn: '1h' });
  //                         result[0].token = token;
  //                         return res.json(result);
  //                       }
  //                   }
  //         })
  // }



  // create(req: Request, res: Response): void{

  //   var name = req.body.name;
  //   var email = req.body.email;
  //   var password = req.body.password;
  //   var userType = req.body.userType;
  //   var status = req.body.status;

  //   const userMongoose = new UserMongoose();
  //   const model = userMongoose.getUserModel;
  //   const userSchema = userMongoose.getUserSchema;

  //   var result = "POST 200OK - name: " + name + " email: " + email + " password: " + password + "  userType: " + userType + " status: " + status;

  //   var users = model('users', userSchema, 'users');
  //   //console.log(users);

  //   users.find({email: email}, (err: any, result: any) => {
  //           if (err) {
  //             console.log("Error! " + err.message);
  //             return err;
  //         }
  //         else {
  //             if (result.length === 0){
  //                   var user = new users({ name: name, email: email, password: password, status: status, token: '99999999999', userType: userType });
  //                         user.save((err: any) => {
  //                           if (err) {
  //                               console.log("Error! " + err.message);
  //                               return err;
  //                           }
  //                           else {
  //                               res.json(result);
  //                           }
  //                       });

  //             }else{
  //               res.json("user exists");
  //             }

  //         }
  //   })
  
  // }


  // update(req: Request, res: Response): User{

  //   var _id = req.body._id;
  //   // var name = this.req.body.name;
  //   // var email = this.req.body.email;
  //   // var password = this.req.body.password;
  //   // var userType = this.req.body.userType;
  //   // var status = this.req.body.status;

  //   const userMongoose = new UserMongoose();
  //   const model = userMongoose.getUserModel;
  //   const userSchema = userMongoose.getUserSchema;

  //   var users = model('users', userSchema, 'users');

  //       return users.findByIdAndUpdate(
  //             _id,
  //             req.body,
  //             // an option that asks mongoose to return the updated version 
  //             // of the document instead of the pre-updated one.
  //             {new: true},
  //             // the callback function
  //             (err: any, userdb: any) => {
  //             // Handle any possible database errors
  //                 if (err){
  //                   //this.res.status(500).send(err);
  //                   return new User('', '', '', '', '', '');
  //                 } 
  //                 //let userdbJson = res.json(userdb);
  //                 let userdbJson = JSON.stringify(userdb);
  //                 let user = UserController.FromJSON(userdbJson);
  //                 return user;
  //             }
  //         )
  
  // }

  
    static FromJSON(serialized : string) : User {
      const user : ReturnType<() => User> = JSON.parse(serialized);
      return new User(
          user.name,
          user.email,
          user.password,
          user.status,
          user.token,
          user.userType
      )
  }

} 

export default new UserController();
