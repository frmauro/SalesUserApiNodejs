"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMongosse_1 = __importDefault(require("../models/DB/userMongosse"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecretKey_1 = __importDefault(require("../config/jwtSecretKey"));
const inversify_1 = require("inversify");
require("reflect-metadata");
let UserController = class UserController {
    //private _userController: IUserController;
    constructor(
    //@inject(TYPES.IUserController) userController: IUserController
    ) {
        this.jwtSecretKey = new jwtSecretKey_1.default();
        //this._userController = userController;
    }
    setRequest(request) {
        this._req = request;
        //throw new Error('Method not implemented.');
    }
    SetResponse(value) {
        this._res = value;
    }
    index() {
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var users = model('users', userSchema, 'users');
        return users.find({}, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                return this._res.json(result);
            }
        });
    }
    findByEmailAndPassword() {
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var email = this._req.body.email;
        var password = this._req.body.password;
        var users = model('users', userSchema, 'users');
        return users.find({ email: email, password: password }, (err, result) => {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                if (result.length === 0) {
                    this._res.json("user not exists");
                    return "user not exists";
                }
                else {
                    let token = jsonwebtoken_1.default.sign({ password: password }, this.jwtSecretKey.getSecretKey, { expiresIn: '1h' });
                    result[0].token = token;
                    return this._res.json(result);
                }
            }
        });
    }
    create() {
        var name = this._req.body.name;
        var email = this._req.body.email;
        var password = this._req.body.password;
        var userType = this._req.body.userType;
        var status = this._req.body.status;
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var result = "POST 200OK - name: " + name + " email: " + email + " password: " + password + "  userType: " + userType + " status: " + status;
        var users = model('users', userSchema, 'users');
        //console.log(users);
        users.find({ email: email }, (err, result) => {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                if (result.length === 0) {
                    var user = new users({ name: name, email: email, password: password, status: status, token: '99999999999', userType: userType });
                    user.save((err) => {
                        if (err) {
                            console.log("Error! " + err.message);
                            return err;
                        }
                        else {
                            this._res.json(result);
                        }
                    });
                }
                else {
                    this._res.json("user exists");
                }
            }
        });
    }
};
UserController = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserController);
exports.default = UserController;
//# sourceMappingURL=userController.js.map