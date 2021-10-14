var app = require('./config/server');


// GRPC *******************************************************************

const PROTO_PATH = "./user.proto";
var grpc = require('grpc');
var protoLoader = require("@grpc/proto-loader");
const user = require('./models/user');

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
     keepCase: true,
     longs: String,
     enums: String,
     arrays: true
 });

  
var userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(userProto.SalesUserApi.UserService.service, {
     findByEmailAndPassword: (call, callback) => {

                 var db = app.models.user;
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
 })

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
 // GRPC *******************************************************************



var port = 8088;
app.listen(port, function() {
        console.log('Server GRPC - running at http://0.0.0.0:50051')
        server.start()
        console.log('O servidor HTTP esta escutando a porta: ' + port);
});


