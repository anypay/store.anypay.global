docker login --email $DOCKER_EMAIL \
             --username $DOCKER_USER \
             --password $DOCKER_PASSWORD 

docker tag store.anypay.global anypay/store.anypay.global:latest

docker push anypay/store.anypay.global:latest
