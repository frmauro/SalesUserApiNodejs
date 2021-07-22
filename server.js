var app = require('./config/server');


// GRPC *******************************************************************

const PROTO_PATH = "./user.proto";
var grpc = require('grpc');
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
     keepCase: true,
     longs: String,
     enums: String,
     arrays: true
 });

const user =  { id: '1', name: 'Francisco Mauro', password: '123', token: 'hjsdf8sd7fsdfshjksdfs87986786', userType: 'administrator', status: 'Active'  };
  
var userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(userProto.SalesUserApi.UserService.service, {
     findByEmailAndPassword: (_, callback) => {
         callback(null, user)
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


