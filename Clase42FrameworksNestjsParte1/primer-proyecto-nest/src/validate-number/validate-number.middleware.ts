import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ValidateNumberMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Usando middleware')
    next();
  }
}
