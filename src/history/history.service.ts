import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryDto } from './dto/history.dto';
import { History } from './entities';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History) private historyRepository: Repository<History>,
  ) {}

  find() {
    return this.historyRepository.find();
  }

  findById(id: number) {
    return this.historyRepository.findOneBy({ id });
  }

  save(history: HistoryDto) {
    return this.historyRepository.create(history);
  }
}
