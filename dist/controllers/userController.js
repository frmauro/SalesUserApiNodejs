"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMongosse_1 = __importDefault(require("../models/DB/userMongosse"));
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecretKey_1 = __importDefault(require("../config/jwtSecretKey"));
require("reflect-metadata");
//@injectable()
class UserController {
    constructor() {
        this._listUsers = new Array();
        this.jwtSecretKey = new jwtSecretKey_1.default();
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const userMongoose = new userMongosse_1.default();
            const model = userMongoose.getUserModel;
            const userSchema = userMongoose.getUserSchema;
            var users = model('users', userSchema, 'users');
            return yield users.find({}, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //  for (let index = 0; index < result.length; index++) {
                    //    const element = result[index];
                    //    const doc = element._doc;
                    //    let user: User = new User(doc._id, doc.name, doc.email, doc.password, doc.token, doc.userTyle, doc.status);
                    //    this._listUsers.push(user);
                    //  }
                    return result;
                }
            });
        });
    }
    findByEmailAndPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMongoose = new userMongosse_1.default();
            const model = userMongoose.getUserModel;
            const userSchema = userMongoose.getUserSchema;
            var email = req.body.email;
            var password = req.body.password;
            var users = model('users', userSchema, 'users');
            return yield users.find({ email: email, password: password }, (err, result) => {
                if (err) {
                    console.log("Error! " + err.message);
                    return err;
                }
                else {
                    if (result.length === 0) {
                        res.json("user not exists");
                        return "user not exists";
                    }
                    else {
                        let token = jsonwebtoken_1.default.sign({ password: password }, this.jwtSecretKey.getSecretKey, { expiresIn: '1h' });
                        result[0].token = token;
                        return result;
                    }
                }
            });
        });
    }
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
        return new user_1.default(user.id, user.name, user.email, user.password, user.status, user.token, user.userType);
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map