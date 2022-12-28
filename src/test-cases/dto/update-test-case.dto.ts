import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';
import { CreateTestCaseDto } from './create-test-case.dto';

export class UpdateTestCaseDto extends PartialType(CreateTestCaseDto) {
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
