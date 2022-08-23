"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMongosse_1 = __importDefault(require("../models/DB/userMongosse"));
let jwt = require('jsonwebtoken');
let jwtSecretKey = require('../config/jwtSecretKey');
class UserController {
    constructor(request, response) {
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
        users.find({ email: email, password: password }, (err, result) => {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                if (result.length === 0) {
                    this.res.json("user not exists");
                }
                else {
                    let token = jwt.sign({ password: password }, jwtSecretKey.secret, { expiresIn: '1h' });
                    result[0].token = token;
                    this.res.json(result);
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
        var name = this.req.body.name;
        var email = this.req.body.email;
        var password = this.req.body.password;
        var userType = this.req.body.userType;
        var status = this.req.body.status;
        const userMongoose = new userMongosse_1.default();
        const model = userMongoose.getUserModel;
        const userSchema = userMongoose.getUserSchema;
        var users = model('users', userSchema, 'users');
        users.findByIdAndUpdate(
        // the id of the item to find
        _id, 
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        this.req.body, 
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        { new: true }, 
        // the callback function
        (err, user) => {
            // Handle any possible database errors
            if (err)
                return this.res.status(500).send(err);
            return this.res.json(user);
        });
    }
}
exports.default = UserController;
