import { Response, Router, Request } from 'express';

import {getManager} from 'typeorm';
import {User} from '../entities/user';

class UserController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.mountRoutes();
  }

  private mountRoutes = (): void => {
    this.router.get('', this.getAllUsers);
  }

  public getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const entityManager = getManager(); // you can also get it via getConnection().manager
    const users = await entityManager.find(User);
    return res.status(200).json({ users });
  }

}

export default new UserController();
