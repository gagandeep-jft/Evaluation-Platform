import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecutorService } from 'src/executor/executor.service';
import { History } from 'src/history/entities';
import { HistoryService } from 'src/history/history.service';
import { Test } from './entities';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [TypeOrmModule.forFeature([Test, History])],
  providers: [TestService, ExecutorService, HistoryService],
  controllers: [TestController],
  exports: [TypeOrmModule],
})
export class TestModule {}
