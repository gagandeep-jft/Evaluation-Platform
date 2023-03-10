import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCase } from 'src/test-cases/entities';
import { Repository } from 'typeorm';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { UpdateQuestionDTO } from './dto/update-question.dto';
import { Question } from './entities/questions.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  findAll(): Promise<Question[]> {
    return this.questionRepository.find({
      relations: {
        test_cases: true,
      },
    });
  }

  findOne(id: number): Promise<Question> {
    return this.questionRepository.findOneBy({ id });
  }

  async create(newQuestion: CreateQuestionDTO) {
    newQuestion.test_cases = newQuestion.test_cases.map((testCase) => {
      const tCase = new TestCase();
      tCase.stdin = testCase.stdin;
      tCase.output = testCase.output;
      return tCase;
    });
    console.log(newQuestion);
    return this.questionRepository.save(newQuestion);
  }

  async update(id: number, updQuestion: UpdateQuestionDTO): Promise<Question> {
    const question = await this.findOne(id);

    question.title = updQuestion.title ? updQuestion.title : question.title;
    question.description = updQuestion.description
      ? updQuestion.description
      : question.description;
    question.points = updQuestion.points ? updQuestion.points : question.points;

    return await this.questionRepository.save(question);
  }

  async remove(id: number) {
    const question = await this.findOne(id);
    console.log(question);
    if (!question) {
      throw new NotFoundException();
    }
    return this.questionRepository.remove(question);
  }
}
