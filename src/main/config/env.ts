import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Env {
  public static STAGE: string;
  public static PORT: number;
  public static CORS_ORIGIN: string;
  public static JWT_SECRET: string;
  public static URL: string;

  constructor() {
    const configService: ConfigService = new ConfigService();

    Env.STAGE = configService.get('STAGE');
    Env.PORT = parseInt(configService.get('PORT'));
    Env.CORS_ORIGIN = configService.get('CORS_ORIGIN');
    Env.JWT_SECRET = configService.get('JWT_SECRET');
    Env.URL = configService.get('URL');
  }
}
