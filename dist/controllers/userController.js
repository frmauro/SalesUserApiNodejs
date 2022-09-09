"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMongosse_1 = __importDefault(require("../models/DB/userMongosse"));
const user_1 = __importDefault(require("../models/user"));
const jwtSecretKey_1 = __importDefault(require("../config/jwtSecretKey"));
require("reflect-metadata");
//@injectable()
class UserController {
    constructor() {
        this.jwtSecretKey = new jwtSecretKey_1.default();
    }
    index(res) {
        const userMongoose = new userMongosse_1.default();
        userMongoose.connect();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var users = model('users', userSchema, 'users');
        return users.find({}, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
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
    static FromJSON(serialized) {
        const user = JSON.parse(serialized);
        return new user_1.default(user.name, user.email, user.password, user.status, user.token, user.userType);
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map