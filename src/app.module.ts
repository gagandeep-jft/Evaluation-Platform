import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';
import { QuestionsModule } from './questions/questions.module';
import { HistoryModule } from './history/history.module';
import { ExecutorModule } from './executor/executor.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TestModule,
    QuestionsModule,
    HistoryModule,
    ExecutorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
