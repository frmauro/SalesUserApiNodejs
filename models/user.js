var mongoose = require('mongoose');

module.exports = function(application) {

  // enviroment without docker compose
  //var db = { uri : "mongodb://mongodb:27017/ApiSalesUser" };
  
  // enviroment docker compose
  var db = { uri : "mongodb://dbmongouser:27017/ApiSalesUser" };

  // local enviroment 
  //var db = { uri : "mongodb://localhost:27017/ApiSalesUser" };
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
