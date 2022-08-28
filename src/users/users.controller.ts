import { NextFunction, Request, Response } from 'express';
import { LoggerService } from './../logger/logger.service';
import { BaseController } from '../common/base.controller';
import { IControllerRoute } from '../common/route.interface';
import { HTTPError } from '../errors/http-error.class';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);

    this.bindRoutes([
      { path: '/register', func: this.register, method: 'post' },
      { path: '/login', func: this.login, method: 'post' },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'login error', 'login'));
  }
  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}
