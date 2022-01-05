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
                var usersResult = {};
                
                users.find({}, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            usersResult = result;
                        }
                        callback(null, usersResult);
                });

        }
 })


   server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
   return server;
}

