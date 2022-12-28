import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(
    @InjectRepository(History) private readonly history: HistoryService,
  ) {}

  @Get()
  getAll() {
    return this.history.find();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.history.findById(id);
  }
}
