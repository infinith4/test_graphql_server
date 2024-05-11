import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // AppServiceクラスに記述したgetHelloメソッドを実行
    return this.appService.getHello();
  }
}