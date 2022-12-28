import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solution } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Solution])],
  exports: [TypeOrmModule],
})
export class SolutionsModule {}
