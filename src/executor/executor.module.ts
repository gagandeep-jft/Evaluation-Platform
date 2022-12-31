import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExecutorController } from './executor.controller';
import { ExecutorService } from './executor.service';

@Module({
  imports: [HttpModule],
  controllers: [ExecutorController],
  providers: [ConfigService, ExecutorService],
})
export class ExecutorModule {}
