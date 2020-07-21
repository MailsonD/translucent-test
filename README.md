# Translucent Test

This repository it's about little project of an app to keep track the video games you own. Here, was made a web application where you can register and see all your games. It's very simple and helpful!

## Used Technologies

To make the fron-end, was used Angular 9 with Material Angular to build the UI. We still used NGRX with angular to store our data.

To make the back-end, was used Java with Spring Boot to create a REST API. was used a Docker container for our Database and for make the deploy of the application too. The application was deployed on <a href="https://www.heroku.com/">Heroku</a> and its documented with Swagger. You can access our API <a href="https://gamesshelf.herokuapp.com/swagger-ui.html">here</a> to see the endpoints.

## How To Run - Back-end

If you don't want to run the back-end, you can just use it from heroku with the link above. But if you still wana run the back-end, you'll need two things on you computer, the maven and docker installed.

With these two things instaled, make shure that the port 8080 of your computer it's not blocked. In other case you'll have to change de application port on `back-end/src/main/resources/application.yml`. You just have to change the line with port: 8080 to the port that you want.

Before you can start your application we have to start the database in a Docker container (Detail: our API is configured with the Heroku Database, so if you want to run the database localy, you'll have to change the database config in the `application.yml`. If you really want to run locally, on the end of the readme its the database config, in other case, just skip this section). For this, move to the `database/` folder. There, you'll run these two commands:

```
sudo docker build -t db_games_shelf .
```

```
sudo docker run  --name db_games -p 5433:5432 db_games_shelf
```

Now, with the database running on docker we can start our API. For this, just follow these commands on the root of the back-end folder:

```
mvn clean package
```

```
java -jar target/games-shelf-0.0.1-SNAPSHOT.jar
```

Now you can access `localhost:8080` and see our applications running. If you changed the port, just change on the URL too.

You can access `localhost:8080/swagger-ui.html` to see all the endpoints and how it works. The path to access the games resource is `/games`.

## How To Run - Front-end

To run the front-end you'll need only the Node installed in your computer, since NPM comes with the node.

if you want the front-end running locally using the back-end locally too, you can change the envionment `API_URL` to `localhost:8080`.

On the root folder of `front-end/` you'll run the foolowing commands:

```
npm install
```

```
ng serve
```

With this, the front-end will run at `localhost:4200`. Make sure that the port 4200 on your computer it's not blocked too.

Now, you can use this application whenever you whant.

## Considerations

The application it's partially responsive and was planned to be full responsive, but the features was prioritized and the responsive came in last priority.
