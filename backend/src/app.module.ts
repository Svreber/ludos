import { GraphqlModule } from './modules/graphql/graphql.module';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { expressLoggerToConsole, expressLoggerToFile } from './core/middleware/logger.middleware';
import { responseHeaders } from './core/middleware/response-header.middleware';
import * as express from 'express'
import { BoardgameModule } from './modules/boardgame/boardgame.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { LanguageModule } from './modules/language/language.module';

@Module({
  imports: [
    GraphqlModule,
    BoardgameModule,
    LanguageModule,
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
