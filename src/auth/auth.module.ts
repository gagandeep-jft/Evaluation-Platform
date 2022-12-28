import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { User } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  imports:[ConfigModule.forRoot({}),TypeOrmModule.forFeature([User]),JwtModule.register({
    secret: "abcg",
    signOptions: { expiresIn: '1d' },
  })],
  providers: [AuthService,GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {
  
}
