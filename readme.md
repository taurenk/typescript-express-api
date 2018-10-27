# Typescript API Server
Expirmenting with Typescript + Express + typeorm.

## Setup and Running
A standard `npm install` will install all dependencies.

To run, type `npm start` which will do both the compiling of typescript files into the `/dist` repo and then  run the outputted javascript files.

### Docker MySQL
`docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test mysql:7`
TODO; mount volumes + migrations :)
