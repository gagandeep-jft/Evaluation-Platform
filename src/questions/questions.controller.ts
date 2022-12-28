import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { UpdateQuestionDTO } from './dto/update-question.dto';
import { Question } from './entities/questions.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionService: QuestionsService){}

    @Get()
    getAll(): Promise<Question[]> {
        return this.questionService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Question> {
        return this.questionService.findOne(id);
    }

    @Post('create')
    create(@Body() createQuesDTO: CreateQuestionDTO): Promise<Question> {
        return this.questionService.create(createQuesDTO)
    }

    @Post('update/:id')
    update(@Param('id') id: number, @Body() updateQuesDTO: UpdateQuestionDTO): Promise<Question> {
        return this.questionService.update(id, updateQuesDTO)
    }

    @Post('delete/:id')
    delete(@Param('id') id: number): Promise<Question> {
        return this.questionService.remove(id);
    }
}
