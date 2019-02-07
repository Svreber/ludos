import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { expressLoggerToConsole, expressLoggerToFile } from './core/middleware/logger.middleware';
import { responseHeaders } from './core/middleware/response-header.middleware';
import * as express from 'express'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply([
        express.json(),
        expressLoggerToConsole,
        expressLoggerToFile,
        responseHeaders
      ] as any)
      .forRoutes('*');
    }
}