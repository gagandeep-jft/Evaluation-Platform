import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports:[ConfigModule.forRoot({})],
  providers: [AuthService,GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
