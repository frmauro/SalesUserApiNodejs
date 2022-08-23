"use strict";
var app = require('./config/server');
// GRPC *******************************************************************
var port = 8088;
app.listen(port, function () {
    console.log('Server GRPC - running at http://0.0.0.0:50051');
    var server = app.grpc.userServiceGrpc.grpcservice(app);
    server.start();
    console.log('O servidor HTTP esta escutando a porta: ' + port);
});
