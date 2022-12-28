import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExecutorService } from 'src/executor/executor.service';
import { HistoryDto } from 'src/history/dto/history.dto';
import { HistoryService } from 'src/history/history.service';
import { Test } from './entities';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test) private testRepository: Repository<Test>,
    private readonly executorService: ExecutorService,
    private readonly history: HistoryService,
  ) {}

  start(id: number) {
    return {
      ...this.testRepository.findOneBy({ id }),
      executorOptions: this.executorService.getOptions(),
    };
  }

  submit(data: HistoryDto) {
    this.history.save(data);
    return {
      message:
        'Your Test has been submitted, please check your Dashboard for more information.',
    };
  }
}
