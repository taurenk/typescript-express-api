import express = require("express");
import {createConnection, Connection} from "typeorm";
import testController from './controllers/testController';
import userController from './controllers/userController';

class Server {

  public app;

  constructor() {
    this.app = express();
  }

  public async setup (): Promise<void> {
    this.mountRoutes();
    await this.setupDatabase();
  }

  public async setupDatabase (): Promise<void>  {
    await createConnection();
  }

  private mountRoutes = (): void => {
    const router = express.Router();
    router.use('/test', testController.router);
    router.use('/users', userController.router);
    this.app.use('/', router);
  }
  
}

export default new Server();