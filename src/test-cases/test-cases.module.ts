import { Module } from '@nestjs/common';
import { TestCasesService } from './test-cases.service';
import { TestCasesController } from './test-cases.controller';
import { TestCase } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TestCase])],
  controllers: [TestCasesController],
  providers: [TestCasesService],
})
export class TestCasesModule {}
