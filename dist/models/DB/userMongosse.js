"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbConnect = __importStar(require("../../config/mongodbConnection.json"));
class UserMongoose {
    constructor() {
    }
    get getUserSchema() {
        return this._userSchema;
    }
    get getUserModel() {
        return mongoose_1.model;
    }
    connect() {
        var db = { uri: dbConnect.uri };
        (0, mongoose_1.connect)(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const UserSchema = new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            token: { type: String, required: true },
            userType: { type: String, required: true },
            status: { type: String, required: true }
        }, { collection: 'usercollection' });
        this._userSchema = UserSchema;
    }
}
exports.default = UserMongoose;
//# sourceMappingURL=userMongosse.js.map