import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/questions.entity';
import { TestCase } from 'src/test-cases/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Question, TestCase])],
  providers: [QuestionsService],
  controllers: [QuestionsController],
  exports: [TypeOrmModule],
})
export class QuestionsModule {}
