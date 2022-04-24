import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { Env } from '@/main/config';
import { AppModule } from '@/app.module';

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
