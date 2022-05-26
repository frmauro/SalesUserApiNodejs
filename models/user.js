var mongoose = require('mongoose');
var fs = require('fs');

let rawdata = fs.readFileSync('./config/mongodbConnection.json');
let conn = JSON.parse(rawdata);
//console.log(conn);
//console.log(conn.uri);

//var mongodbConnection = require('../config/mongodbConnection');

module.exports = function(application) {

  //let strconndb = "current connection -> " + mongodbConnection.uri;
  //console.log(strconndb);

  var db = { uri : conn.uri };

  mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const UserSchema = new mongoose.Schema(
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
  

  return { Mongoose: mongoose, UserSchema: UserSchema };

}
