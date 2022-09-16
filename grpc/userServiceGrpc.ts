import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import UserMongoose from '../models/DB/userMongosse';
import { IUserServiceServer } from '../proto/user_grpc_pb';
import { Empty, User, UserEmailPassword, UserList, UserRequestId } from "../proto/user_pb";


class GrpcUserService implements IUserServiceServer{
    [name: string]: UntypedHandleCall;

    
    getAll(_: ServerUnaryCall<Empty, UserList>, callback: sendUnaryData<UserList>): void  {

        const response = new UserList();
        //userList: Array<any>;
         const userMongoose = new UserMongoose();
         const model = userMongoose.getUserModel;
         const userSchema = userMongoose.getUserSchema;
         var users = model('users', userSchema, 'users');
         users.find({}, function(err: any, result: any) {
                if (err) {
                    console.log(err);
                } else {
                    result.forEach((element: any) => {
                        let user: User =  {
                            setId: element.id, setName: element.name, setEmail: element.email, setPassword: element.password, setToken: element.token, setUsertype: element.userType, setStatus: element.status,
                            getId: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getName: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getEmail: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getPassword: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getToken: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getUsertype: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            getStatus: function (): string {
                                throw new Error('Function not implemented.');
                            },
                            serializeBinary: function (): Uint8Array {
                                throw new Error('Function not implemented.');
                            },
                            toObject: function (includeInstance?: boolean): any {
                                throw new Error('Function not implemented.');
                            }
                        };
                        response.addUsers(user);
                        //userList.push(user);
                    });
                    
                }

        callback(null, response);
    })};
    get(call: ServerUnaryCall<UserRequestId, User>, callback: sendUnaryData<User>): void {
        const user = new User();
        callback(null, user);
    };
    findByEmailAndPassword(call: ServerUnaryCall<UserEmailPassword, User>, callback: sendUnaryData<User>): void {};
    create(call: ServerUnaryCall<User, User>, callback: sendUnaryData<User>): void  {};
    update(call: ServerUnaryCall<User, User>, callback: sendUnaryData<User>): void {};
    
 }

 export default GrpcUserService;



// import * as grpc from 'grpc';
// import * as protoLoader from '@grpc/proto-loader';
//import user from '../models/user';
//const PROTO_PATH = "./user.proto";

//var grpc = require('grpc');
//var protoLoader = require("@grpc/proto-loader");
//const user = require('../models/user');

// var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     arrays: true
// });

// module.exports.grpcservice = function(app){

// var userProto = grpc.loadPackageDefinition(packageDefinition);
// const server = new grpc.Server();

// server.addService(userProto.SalesUserApi.UserService.service, {
//     findByEmailAndPassword: (call, callback) => {

//                 var db = app.models.user;
//                 //var db = user;
//                 var users = db.Mongoose.model('users', db.UserSchema, 'users');
//                 var user =  { id: '1', name: 'Teste', password: '999', token: 'hjsdf8sd7fsdfshjksdfs87986786', userType: 'administrator', status: 'Active'  };
           
//                users.find({ email: call.request.email, password: call.request.password }, null, { limit: 1 }, function(err, result) {
//                    if (err) {
//                        console.log(err);
//                    } else {
//                        //console.log(result);
//                        //console.log(result[0].name);
//                         user.id = result[0].id;
//                         user.name = result[0].name;
//                         user.password = result[0].password;
//                         user.token = result[0].token;
//                         user.userType = result[0].userType;
//                         user.status = result[0].status;
//                        //res.json(result);
//                    }
//                    callback(null, user)
//                });

//     },
    // GetAll: (call, callback) => {
    //             var db = app.models.user;
    //             //console.log(db);
    //             var users = db.Mongoose.model('users', db.UserSchema, 'users');
    //             var userList = [];
                
                
    //             users.find({}, function(err, result) {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                         result.forEach(element => {
    //                             var user =  { id: element.id, name: element.name, email: element.email, password: element.password, token: element.token, userType: element.userType, status: element.status  };
    //                             userList.push(user);
    //                         });
                            
    //                     }
    //                     callback(null, { users: userList });
    //             });

    //     },
    //     Get: (call, callback) => {
    //         var db = app.models.user;
    //         var users = db.Mongoose.model('users', db.UserSchema, 'users');
    //         var userResult = {}; 
            
    //         users.find({ _id: call.request.id }, null, { limit: 1 }, function(err, result) {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                    userResult = { id: result[0].id, name: result[0].name, email: result[0].email, password: result[0].password, token: result[0].token, userType: result[0].userType, status: result[0].status  };
    //                 }
    //                 callback(null,  userResult);
    //         });

    //     },
    //     create: (call, callback) => {

    //         var db = app.models.user;
    //         //var db = user;
    //         var users = db.Mongoose.model('users', db.UserSchema, 'users');
    //         var newuser =  { name: call.request.name, email: call.request.email, password: call.request.password, token: 'hjsdf8sd7fsdfshjksdfs87986786', userType: call.request.userType, status: call.request.status  };
       
    //         users.find({email: call.request.email}, function(err, result){
    //             if (err) {
    //                 callback(null,  newuser);
    //             }
    //             else {
    //               if (result.length === 0){
    //                         var user = new users(newuser);
    //                         user.save(function (err, newuserdb) {
    //                             if (err) {
    //                                 return err;
    //                             }
    //                             else {
    //                                 callback(null,  newuserdb);
    //                             }
    //                         });
    //                   }else{
    //                     callback(null,  newuser);
    //                 }
    //               }
    
    //         })

    //     },
    //     update: (call, callback) => {

    //         var db = app.models.user;
    //         var users = db.Mongoose.model('users', db.UserSchema, 'users');
    //         //console.log(result);
    //         users.findByIdAndUpdate(
    //           // the id of the item to find
    //           call.request.id,
              
    //           // the change to be made. Mongoose will smartly combine your existing 
    //           // document with this change, which allows for partial updates too
    //           call.request,
              
    //           // an option that asks mongoose to return the updated version 
    //           // of the document instead of the pre-updated one.
    //           {new: true},
              
    //           // the callback function
    //           (err, user) => {
    //           // Handle any possible database errors
    //               if (err) callback(null,  {});
    //                callback(null,  user);
    //           }
    //       )

    //     },
 //})


   //server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
   //return server;
//}
