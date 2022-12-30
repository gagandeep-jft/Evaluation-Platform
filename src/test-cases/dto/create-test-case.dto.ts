import { IsNumber, IsOptional } from '@nestjs/class-validator';
import { IsString, IsNotEmpty } from 'class-validator';

export class TestCaseDto {
  @IsOptional()
  @IsNumber()
  qid?: number;

  @IsString()
  @IsNotEmpty()
  stdin: string;

  @IsString()
  @IsNotEmpty()
  output: string;
}
