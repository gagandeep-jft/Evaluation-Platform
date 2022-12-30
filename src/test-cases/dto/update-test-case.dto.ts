import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';
import { TestCaseDto } from './create-test-case.dto';

export class UpdateTestCaseDto extends PartialType(TestCaseDto) {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  qid: number;

  @IsNotEmpty()
  stdin: string;

  @IsNotEmpty()
  output: string;
}
