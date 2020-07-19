mvn clean package

sudo docker build -t gameshelf/api .

sudo docker run --name gameshelf_api -p 8080:8080 gameshelf/api