import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './core/utils/logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => logger.info('Application is listening on port 3000'));
}

bootstrap();
