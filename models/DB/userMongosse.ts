import { Schema, model, connect } from 'mongoose';
import * as dbConnect  from '../../config/mongodbConnection.json';


class UserMongoose {
     _userSchema: any;
    
    constructor(){
    }


    get getUserSchema(): any{
        return this._userSchema;
    }

    get getUserModel(): any {
        return model;
    }

        connect() {

        var db = { uri : dbConnect.uri };

        connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

        const UserSchema = new Schema(
            {
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            token: { type: String, required: true },
            userType:  {  type: String, required: true },
            status: { type: String, required: true }
            },
            { collection: 'usercollection' }
        );
        
            this._userSchema = UserSchema;
        }

}

export default UserMongoose;