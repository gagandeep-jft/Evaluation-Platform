import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';
import { QuestionsModule } from './questions/questions.module';
// import { HistoryModule } from './history/history.module';
import { ExecutorModule } from './executor/executor.module';
import { User } from './users/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { UserController } from './user/user.controller';
import { HistoryController } from './history/history.controller';
import { Question } from './questions/questions.entity';
import { LoggerMiddleware } from './logger/logger.middleware';
import { HistoryModule } from './history/history.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TestModule,
    QuestionsModule,
    HistoryModule,
    ConfigModule.forRoot({}),
    ExecutorModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({})],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User, Question],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.register({
      secret: "abcg",
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [AppController, HistoryController, ],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('auth')
      .forRoutes('users','questions','tests','history');
  }
}
