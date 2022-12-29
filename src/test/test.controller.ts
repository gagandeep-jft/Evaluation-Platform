import { Body, Controller, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { HistoryDto } from 'src/history/dto/history.dto';
import { TestStartDto } from './dto';

@Controller('test')
export class TestController {
  constructor(private tests: TestService) {}

  @Post('start')
  start(@Body() body: TestStartDto) {
    return this.tests.start(body);
  }

  @Post('submit')
  submit(@Body() body: HistoryDto) {
    return this.tests.submit(body);
  }
}
