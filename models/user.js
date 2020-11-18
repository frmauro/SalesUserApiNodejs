var mongoose = require('mongoose');

module.exports = function(application) {

  var db = { uri : "mongodb://mongodb:27017/ApiSalesUser" };
  //var db = { uri : "mongodb://localhost:27017/ApiSalesUser" };
  mongoose.connect(db.uri, { useNewUrlParser: true });

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
