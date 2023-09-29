import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/sessions')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  // appService: AppService;

  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get('/saludo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/guardar')
  guardar(): string {
    return 'Hola mundo';
  }
}
