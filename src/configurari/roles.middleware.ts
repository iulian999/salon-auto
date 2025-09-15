import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // trimite în Postman: Headers → role=admin sau role=user
    const role = req.headers['role']; 

    if (!role || role !== 'admin') {
      throw new ForbiddenException('Acces interzis');
    }

    next();
  }
}
