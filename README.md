## command for build image 
docker build --tag salesapiusernode .

## command for run userapi container 
docker run --name salesusernode -d -p 8088:8088 --link mongodb salesapiusernode

## command for run mongo container 
docker run --name mongodb -p 27017:27017 -d mongo

## url to swagger doc
http://localhost:8088/api-docs/
