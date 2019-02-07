import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './core/utils/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => logger.info('Application is listening on port 3000'));
}

bootstrap();
