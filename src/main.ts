import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';
import { Env } from '@/main/config';

async function bootstrap() {
  new Env();
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: Env.CORS_ORIGIN,
    credentials: true,
  });

  await app.listen(Env.PORT);

  logger.log(`[*] Server running at ${Env.URL}:${Env.PORT}`);
}

bootstrap();
