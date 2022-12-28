import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities';
import { HistoryService } from './history.service';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistoryService],
  exports: [TypeOrmModule]
})
export class HistoryModule {}
