import { fromJSON } from '@grpc/proto-loader';
import UserMongoose from '../models/DB/userMongosse'
import User from '../models/user';
import jwt from 'jsonwebtoken';
import JwtSecretKey from '../config/jwtSecretKey';
import { IUserController } from './IUserController';
import { injectable, inject } from 'inversify';
import "reflect-metadata";
import TYPES from '../types';
import { IRoute, IRouter } from 'express';

 //@injectable()
 class UserController  {
  //_req: any;
  //_res: any;
  _app: any;
  _router: any;

  jwtSecretKey: JwtSecretKey = new JwtSecretKey();
  //private _userController: IUserController;

   constructor(app: any
   ){
     //this._userController = userController;
     this._app = app;
   }

  //  public setRequest(request: any): void {
  //   this._req = request;
  //    //throw new Error('Method not implemented.');
  //  }

  //  public SetResponse(value: any) {
  //   this._res = value;
  //  }

   index(): string {
    const userMongoose = new UserMongoose();
    const model = userMongoose.getUserModel;
    const userSchema = userMongoose.getUserSchema;
    var users = model('users', userSchema, 'users');

    return users.find({}, (err: any, result: any) => {
          if (err) {
            console.log(err);
          } else {
            return this._app._res.json(result);
          }
        });
    }


  findByEmailAndPassword(): string{
    
      const userMongoose = new UserMongoose();
      const model = userMongoose.getUserModel;
      const userSchema = userMongoose.getUserSchema;

      var email = this._app._req.body.email;
      var password = this._app._req.body.password;
      var users = model('users', userSchema, 'users');

     return users.find({email: email, password: password}, (err: any, result: any) => {
                      if (err) {
                        console.log("Error! " + err.message);
                        return err;
                    }
                    else {
                        if (result.length === 0){
                          this._app._res.json("user not exists");
                          return "user not exists";
                        }else{
                          let token = jwt.sign({password: password},  this.jwtSecretKey.getSecretKey,{ expiresIn: '1h' });
                          result[0].token = token;
                          return this._app._res.json(result);
                        }
                    }
          })
  }



  create(): void{

    var name = this._app._req.body.name;
    var email = this._app._req.body.email;
    var password = this._app._req.body.password;
    var userType = this._app._req.body.userType;
    var status = this._app._req.body.status;

    const userMongoose = new UserMongoose();
    const model = userMongoose.getUserModel;
    const userSchema = userMongoose.getUserSchema;

    var result = "POST 200OK - name: " + name + " email: " + email + " password: " + password + "  userType: " + userType + " status: " + status;

    var users = model('users', userSchema, 'users');
    //console.log(users);

    users.find({email: email}, (err: any, result: any) => {
            if (err) {
              console.log("Error! " + err.message);
              return err;
          }
          else {
              if (result.length === 0){
                    var user = new users({ name: name, email: email, password: password, status: status, token: '99999999999', userType: userType });
                          user.save((err: any) => {
                            if (err) {
                                console.log("Error! " + err.message);
                                return err;
                            }
                            else {
                                this._app._res.json(result);
                            }
                        });

              }else{
                this._app._res.json("user exists");
              }

          }
    })
  
  }


  update(): User{

    var _id = this._app._req.body._id;
    // var name = this.req.body.name;
    // var email = this.req.body.email;
    // var password = this.req.body.password;
    // var userType = this.req.body.userType;
    // var status = this.req.body.status;

    const userMongoose = new UserMongoose();
    const model = userMongoose.getUserModel;
    const userSchema = userMongoose.getUserSchema;

    var users = model('users', userSchema, 'users');

        return users.findByIdAndUpdate(
              _id,
              this._app._req.body,
              // an option that asks mongoose to return the updated version 
              // of the document instead of the pre-updated one.
              {new: true},
              // the callback function
              (err: any, userdb: any) => {
              // Handle any possible database errors
                  if (err){
                    //this.res.status(500).send(err);
                    return new User('', '', '', '', '', '');
                  } 
                  let userdbJson = this._app._res.json(userdb);
                  let user = fromJSON(userdbJson);
                  return user;
              }
          )
  
  }

  
  // static fromJSON(serialized : string) : User {
  //   const user : ReturnType<() => User> = JSON.parse(serialized);
  //   return new User(
  //       user.name,
  //       user.email,
  //       user.password,
  //       user.status,
  //       user.token,
  //       user.userType
  //   )
//}

} 

export default UserController;
