import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExecutorService } from 'src/executor/executor.service';
import { HistoryDto } from 'src/history/dto/history.dto';
import { HistoryService } from 'src/history/history.service';
import { Test } from './entities';
import { TestStartDto } from './dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test) private testRepository: Repository<Test>,
    private readonly executorService: ExecutorService,
    private readonly history: HistoryService,
  ) {}

  async start(data: TestStartDto) {
    
    const historyId = await this.history.save({
      testId: data.id,
      userId: data.userId,
      isSubmitted: false,
      isVisible: false,
    });

    console.log(historyId);

    return {
      historyId: historyId,
      testData: {
        ...this.testRepository.find({
          where: { id: data.id },
          relations: {
            questions: true,
          },
        }),
      },
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
