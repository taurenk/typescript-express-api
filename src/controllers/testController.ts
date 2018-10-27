import { Response, Router, Request } from 'express';

class TestController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.mountRoutes();
  }

  private mountRoutes = (): void => {
    this.router.get('/message', this.testMessage);
  }

  public testMessage = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'Test Message!' });
  }
}

export default new TestController();
