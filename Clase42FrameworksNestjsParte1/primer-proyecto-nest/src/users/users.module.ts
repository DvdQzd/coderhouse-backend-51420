import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ValidateNumberMiddleware } from 'src/validate-number/validate-number.middleware';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(consumer) {
    consumer
      .apply(ValidateNumberMiddleware)
      .forRoutes('users');
  }
}
