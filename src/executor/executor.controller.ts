import { Body, Controller, Post } from '@nestjs/common';
import { executorDto } from './dto';
import { ExecutorService } from './executor.service';

@Controller('execute')
export class ExecutorController {
  constructor(private executorService: ExecutorService) {}

  @Post()
  getOutput(@Body() body: executorDto) {
    return this.executorService.getOutput(body);
  }
}
