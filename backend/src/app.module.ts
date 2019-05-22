import { MiddlewareConsumer, Module } from '@nestjs/common';
import { expressLoggerToConsole, expressLoggerToFile } from './core/middleware/logger.middleware';
import { responseHeaders } from './core/middleware/response-header.middleware';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { BoardgameModule } from './modules/boardgame/boardgame.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { LanguageModule } from './modules/language/language.module';
import * as express from 'express';

@Module({
  imports: [
    GraphqlModule,
    LanguageModule,
    BoardgameModule,
    InfrastructureModule
  ]
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
