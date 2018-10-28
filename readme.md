# Typescript API Server
A simple API built with Typescript, Express and Typeorm using a Model-Controller + Repository design pattern.

Todo:
  - DB Migrations
  - Docker compose setup
  - More testing
  - Document libraries
  - Document Design Pattern

## Setup and Running
A standard `npm install` will install all dependencies.

To run, type `npm start` which will do both the compiling of typescript files into the `/dist` repo and then  run the outputted javascript files.

To run tests, type `npm test` which uses `ts-node` to directly run unit tests written in typescript.

### Docker Setup
`docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test mysql:7`
