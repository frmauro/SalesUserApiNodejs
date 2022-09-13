## command for build image 
docker build --tag salesapiusernode .

## command for run userapi container 
docker run --name salesusernode -d -p 8088:8088 --link mongodb salesapiusernode
## command for run userapi container with grpc port too
docker run --name salesusernode -d -p 8088:8088 -p 50051:50051 --link mongodb salesapiusernode

## command for run mongo container 
docker run --name mongodb -p 27017:27017 -d mongo

## url to swagger doc
http://localhost:8088/api-docs/

## curl test POST
curl -X POST -H "Content-Type: application/json" -d '{"name": "Francisco Mauro", "email": "frmauro8@gmail.com", "password": "123", "userType": "administrator", "status": "active"}'  http://localhost:8088/

## curl test POST
curl -X POST -H "Content-Type: application/json" -d '{"name": "Marcia Mauro", "email": "mmauro8@gmail.com", "password": "123", "userType": "client", "status": "active"}'  http://localhost/create

## curl test PUT
curl -X PUT -H "Content-Type: application/json" -d '{"_id": "611aa80245c2ed2212c3ec3d", "name": "Francisco Mauro", "email": "frmauro8@gmail.com", "password": "123", "userType": "administrator", "status": "active"}'  http://localhost/user

## types of connectionStrings to Mongodb

  // enviroment without docker compose
  //var db = { uri : "mongodb://mongodb:27017/ApiSalesUser" };
  
  // enviroment docker compose
  //var db = { uri : "mongodb://dbmongouser:27017/ApiSalesUser" };

  // local enviroment 
  //var db = { uri : "mongodb://localhost:27017/ApiSalesUser" };

  // enviroment docker kubernates
  //var db = { uri : "mongodb://userdb:27017/ApiSalesUser" };



## First, you would want to know which process is using port 3000
sudo lsof -i :8083

## this will list all PID listening on this port, once you have the PID you can terminate it with the following:
kill -9 {PID}

