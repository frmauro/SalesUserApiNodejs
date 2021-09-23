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

## curl test PUT
curl -X PUT -H "Content-Type: application/json" -d '{"_id": "611aa80245c2ed2212c3ec3d", "name": "Francisco Mauro", "email": "frmauro8@gmail.com", "password": "123", "userType": "administrator", "status": "active"}'  http://localhost/user

