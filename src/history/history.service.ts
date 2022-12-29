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

  async save(history: HistoryDto) {
    console.log(history);
    const result = this.historyRepository.create(history);
    return await this.historyRepository.insert(result);
  }
}
