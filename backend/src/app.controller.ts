import { Get, Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { logger } from './core/utils/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  async postHello(@Body() catDto: any): Promise<string> {
    return this.appService.getHello();
  }
}