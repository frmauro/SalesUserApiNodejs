## command for run userapi container 
docker run --name salesusernode -d -p 8088:8088 --link mongodb salesapiusernode

## command for run mongo container 
docker run --name mongodb -p 27017:27017 -d mongo