let jwt = require('jsonwebtoken');
let jwtSecretKey = require('../config/jwtSecretKey');

module.exports.index = function(application, req, res){
    var db = application.models.user;
    //console.log(db);
    var users = db.Mongoose.model('users', db.UserSchema, 'users');

    users.find({}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  }


  module.exports.findByEmailAndPassword = function(application, req, res){
    
      var email = req.body.email;
      var password = req.body.password;
      var db = application.models.user;
      var users = db.Mongoose.model('users', db.UserSchema, 'users');

      users.find({email: email, password: password}, function(err, result){
                      if (err) {
                        console.log("Error! " + err.message);
                        return err;
                    }
                    else {
                        //console.log(result);
                        if (result.length === 0){
                          //console.log(result);
                          res.json("user not exists");
                        }else{
                          let token = jwt.sign({password: password},  jwtSecretKey.secret,{ expiresIn: '1h' });
                          result[0].token = token;
                          res.json(result);
                        }
                    }
          })
  }





  module.exports.create = function(application, req, res){

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var userType = req.body.userType;
    var status = req.body.status;

    var result = "POST 200OK - name: " + name + " email: " + email + " password: " + password + "  userType: " + userType + " status: " + status;

    var db = application.models.user;
    //console.log(db);
    var users = db.Mongoose.model('users', db.UserSchema, 'users');
    //console.log(users);

    users.find({email: email}, function(err, result){
            if (err) {
              console.log("Error! " + err.message);
              return err;
          }
          else {
              //console.log(result);
              if (result.length === 0){

                    var user = new users({ name: name, email: email, password: password, status: status, token: '99999999999', userType: userType });

                          user.save(function (err) {
                            if (err) {
                                console.log("Error! " + err.message);
                                return err;
                            }
                            else {
                                //console.log(result);
                                res.json(result);
                            }
                        });

                //res.json("user not exists");
              }else{
                res.json("user exists");
              }

          }

    })

  
  }


  module.exports.update = function(application, req, res){

    var _id = req.body._id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var userType = req.body.userType;
    var status = req.body.status;

    var db = application.models.user;
    //console.log(db);
    var users = db.Mongoose.model('users', db.UserSchema, 'users');
            //console.log(result);
            users.findByIdAndUpdate(
              // the id of the item to find
              _id,
              
              // the change to be made. Mongoose will smartly combine your existing 
              // document with this change, which allows for partial updates too
              req.body,
              
              // an option that asks mongoose to return the updated version 
              // of the document instead of the pre-updated one.
              {new: true},
              
              // the callback function
              (err, user) => {
              // Handle any possible database errors
                  if (err) return res.status(500).send(err);
                  return res.json(user);
              }
          )
  
  }

