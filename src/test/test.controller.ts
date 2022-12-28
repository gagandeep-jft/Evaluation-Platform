import { Body, Controller, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { HistoryDto } from 'src/history/dto/history.dto';

@Controller('test')
export class TestController {
  constructor(private tests: TestService) {}

  @Post('start')
  start(@Body() id: number) {
    return this.tests.start(id);
  }

  @Post('submit')
  submit(@Body() body: HistoryDto) {
    return this.tests.submit(body);
  }
}
