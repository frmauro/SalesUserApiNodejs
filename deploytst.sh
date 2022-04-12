#!/bin/bash
########################################################

## Shell Script to Build Docker Image and run.   

########################################################


result=$( sudo docker images -q salesapiusernode )
if [[ -n "$result" ]]; then
echo "image exists"
sudo docker rmi -f salesapiusernode
else
echo "No such image"
fi

echo "build the docker image"
echo "built docker images and proceeding to delete existing container"

result=$( docker ps -q -f name=salesusernode )
if [[ $? -eq 0 ]]; then
echo "Container exists"
sudo docker container rm -f salesusernode
echo "Deleted the existing docker container"
else
echo "No such container"
fi

cp -a /home/francisco/estudos/azuredevops/myagent/_work/7/s/.  /home/francisco/estudos/azuredevops/myagent/_work/r6/a/

docker build -t salesapiusernode .

echo "built docker images and proceeding to delete existing container"
echo "Deploying the updated container"

docker run --name salesusernode -d -p 8088:8088 -p 50051:50051 --link mongodb salesapiusernode

echo "Deploying the container"