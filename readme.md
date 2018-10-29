# Typescript API Server
A simple API built with Typescript, Express and Typeorm using a Model-Controller + Repository design pattern.

The goal of this project is to better understand and explore standard design patterns used to develop testable and extendable API's. This repo will serve as a testing ground for applying these concepts. 

References:
 - https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter
 - https://www.typescriptlang.org/docs/home.html
 - https://docs.docker.com/samples/library/mysql
 - https://martinfowler.com/eaaCatalog/repository.html


## The Setup
Pretty standard node commands:
- `npm install` will install all dependencies.
- `npm start` which will do both the compiling of typescript files into the `/dist` repo and then  run the outputted javascript files.
- `npm test` will run all test written in TS directly using `ts-node`.

### Environment File
TypeORM needs some configuration via a `.env` in the root directory of this project (see env-sample for required fields). 

The only tricky thing here is the host name field - `TYPEORM_HOST`. If you are using Docker Compose, simply set this to `TYPEORM_HOST = mysql-db`, which will allow the API container to access mysql. Otherwise, `localhost` or the address of your Mysql instance will work fine.

## Docker 
To Manually run each component, you can run the following:
  - Build API: `docker build -t taurenk/typescript-api:1.0.0 .`
  - Run API: `docker run taurenk/typescript-api:1.0.0`
  - Run Database: `docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test mysql:5`

Docs for MySQL docker can be found here: https://docs.docker.com/samples/library/mysql/#mysql_database

### Docker Compose 
Docker Compose allows us to launch the enture application stack - API and MySQL container - in one command.
- Run stack: `docker-compose -f compose.yml up -d`*
- Teardown stack: `docker-compose -f compose.yml down`*

* see Environment File section on configuration
