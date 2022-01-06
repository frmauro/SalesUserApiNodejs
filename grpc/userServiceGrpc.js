const PROTO_PATH = "./user.proto";
var grpc = require('grpc');
var protoLoader = require("@grpc/proto-loader");
const user = require('../models/user');

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

module.exports.grpcservice = function(app){

var userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(userProto.SalesUserApi.UserService.service, {
    findByEmailAndPassword: (call, callback) => {

                var db = app.models.user;
                //var db = user;
                var users = db.Mongoose.model('users', db.UserSchema, 'users');
                var user =  { id: '1', name: 'Teste', password: '999', token: 'hjsdf8sd7fsdfshjksdfs87986786', userType: 'administrator', status: 'Active'  };
           
               users.find({ email: call.request.email, password: call.request.password }, null, { limit: 1 }, function(err, result) {
                   if (err) {
                       console.log(err);
                   } else {
                       //console.log(result);
                       //console.log(result[0].name);
                        user.id = result[0].id;
                        user.name = result[0].name;
                        user.password = result[0].password;
                        user.token = result[0].token;
                        user.userType = result[0].userType;
                        user.status = result[0].status;
                       //res.json(result);
                   }
                   callback(null, user)
               });

    },
    GetAll: (call, callback) => {
                var db = app.models.user;
                //console.log(db);
                var users = db.Mongoose.model('users', db.UserSchema, 'users');
                var userList = [];
                
                
                users.find({}, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            result.forEach(element => {
                                var user =  { id: element.id, name: element.name, email: element.email, password: element.password, token: element.token, userType: element.userType, status: element.status  };
                                userList.push(user);
                            });
                            
                        }
                        callback(null, { users: userList });
                });

        },
        Get: (call, callback) => {
            var db = app.models.user;
            var users = db.Mongoose.model('users', db.UserSchema, 'users');
            var userResult = {}; 
            
            users.find({ _id: call.request.id }, null, { limit: 1 }, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                       userResult = { id: result.id, name: result.name, email: result.email, password: result.password, token: result.token, userType: result.userType, status: result.status  };
                    }
                    callback(null,  userResult);
            });

        },
        create: (call, callback) => {

            var db = app.models.user;
            //var db = user;
            var users = db.Mongoose.model('users', db.UserSchema, 'users');
            var newuser =  { name: call.request.name, email: call.request.email, password: call.request.password, token: 'hjsdf8sd7fsdfshjksdfs87986786', userType: call.request.userType, status: call.request.status  };
       
            users.find({email: call.request.email}, function(err, result){
                if (err) {
                    callback(null,  newuser);
                }
                else {
                  if (result.length === 0){
                            var user = new users(newuser);
                            user.save(function (err, newuserdb) {
                                if (err) {
                                    return err;
                                }
                                else {
                                    callback(null,  newuserdb);
                                }
                            });
                      }else{
                        callback(null,  newuser);
                    }
                  }
    
            })

        },
 })


   server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
   return server;
}

