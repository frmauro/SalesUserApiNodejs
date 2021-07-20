var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var cors = require('cors');




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

const user =  { id: '1', name: 'Francisco Mauro', password: '123', token: '', userType: 'administrator', status: 'Active'  };
  
var userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(userProto.UserService.service, {
     findByEmailAndPassword: (_, callback) => {
         callback(null, user)
     },
 })

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://0.0.0.0:50051')
server.start()

 // GRPC *******************************************************************





const swaggerUi = require('swagger-ui-express'),
 swaggerDocument = require('../swagger.json');

var app = express();
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
  });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

consign()
     .include('/routes')
     .then('/controllers')
     .then('/models')
     .into(app);

module.exports = app;