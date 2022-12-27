import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDTO } from 'src/users/dto/update-user.dto';
import { Repository } from 'typeorm';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { UpdateQuestionDTO } from './dto/update-question.dto';
import { Question } from './questions.entity';


@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}

    findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    findOne(id: number): Promise<Question> {
        return this.questionRepository.findOneBy({id});
    }

    async create(newQuestion: CreateQuestionDTO): Promise<Question> {
        return await this.questionRepository.save(newQuestion)
    }

    async update(id: number, updQuestion: UpdateQuestionDTO): Promise<Question> {
        const question = await this.findOne(id);
        
        question.title = updQuestion.title ? updQuestion.title : question.title;
        question.description = updQuestion.description ? updQuestion.description : question.description;
        question.points = updQuestion.points ? updQuestion.points : question.points;

        return await this.questionRepository.save(question);
    }

    async remove(id: number): Promise<Question> {
        const question = await this.findOne(id);
        return this.questionRepository.remove(question)
    }
}
