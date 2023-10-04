import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FirstMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`${req.method} at ${req.url} received at ${new Date()}`)
    next();
  }
}
