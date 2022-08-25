"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proto_loader_1 = require("@grpc/proto-loader");
const userMongosse_1 = __importDefault(require("../models/DB/userMongosse"));
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecretKey_1 = __importDefault(require("../config/jwtSecretKey"));
// let jwt = require('jsonwebtoken');
// let jwtSecretKey = require('../config/jwtSecretKey');
class UserController {
    constructor(request, response) {
        this.jwtSecretKey = new jwtSecretKey_1.default();
        this.req = request;
        this.res = response;
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
                return this.res.json(result);
            }
        });
    }
    findByEmailAndPassword() {
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var email = this.req.body.email;
        var password = this.req.body.password;
        var users = model('users', userSchema, 'users');
        return users.find({ email: email, password: password }, (err, result) => {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                if (result.length === 0) {
                    this.res.json("user not exists");
                    return "user not exists";
                }
                else {
                    let token = jsonwebtoken_1.default.sign({ password: password }, this.jwtSecretKey.getSecretKey, { expiresIn: '1h' });
                    result[0].token = token;
                    return this.res.json(result);
                }
            }
        });
    }
    create() {
        var name = this.req.body.name;
        var email = this.req.body.email;
        var password = this.req.body.password;
        var userType = this.req.body.userType;
        var status = this.req.body.status;
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
                            this.res.json(result);
                        }
                    });
                }
                else {
                    this.res.json("user exists");
                }
            }
        });
    }
    update() {
        var _id = this.req.body._id;
        // var name = this.req.body.name;
        // var email = this.req.body.email;
        // var password = this.req.body.password;
        // var userType = this.req.body.userType;
        // var status = this.req.body.status;
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var users = model('users', userSchema, 'users');
        return users.findByIdAndUpdate(_id, this.req.body, 
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        { new: true }, 
        // the callback function
        (err, userdb) => {
            // Handle any possible database errors
            if (err) {
                //this.res.status(500).send(err);
                return new user_1.default('', '', '', '', '', '');
            }
            let userdbJson = this.res.json(userdb);
            let user = (0, proto_loader_1.fromJSON)(userdbJson);
            return user;
        });
    }
    static fromJSON(serialized) {
        const user = JSON.parse(serialized);
        return new user_1.default(user.name, user.email, user.password, user.status, user.token, user.userType);
    }
}
exports.default = UserController;
