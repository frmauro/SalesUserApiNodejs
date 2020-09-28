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
