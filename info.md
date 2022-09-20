npm install http-sever
docker build -t docker-pelle-rewind:0.1 .
docker run --name docker-pelle-container -d -p 8080:8080 docker-pelle-rewind:0.1