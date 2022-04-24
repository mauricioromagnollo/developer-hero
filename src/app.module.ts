import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvValidationSchema } from '@/main/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.STAGE}`],
      validationSchema: EnvValidationSchema,
    }),
  ],
})
export class AppModule {}
