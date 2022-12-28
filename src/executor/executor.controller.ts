import { Body, Controller, Post } from '@nestjs/common';
import { executorDto } from './dto';

@Controller('executor')
export class ExecutorController {
  @Post()
  getOutput(@Body() body: executorDto) {
    return body;
  }
}
