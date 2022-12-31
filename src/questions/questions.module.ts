import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/questions.entity';
import { TestCase } from 'src/test-cases/entities';
import { ExecutorService } from 'src/executor/executor.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, TestCase]),
    ConfigModule.forRoot({}),
    HttpModule
  ],
  providers: [QuestionsService, ExecutorService],
  controllers: [QuestionsController],
  exports: [TypeOrmModule],
})
export class QuestionsModule {}
