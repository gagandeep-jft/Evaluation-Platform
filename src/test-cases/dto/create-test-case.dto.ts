import { IsNumber } from '@nestjs/class-validator';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTestCaseDto {
  @IsNumber()
  @IsNotEmpty()
  qid: number;
  
  @IsString()
  stdin: string;

  @IsString()
  @IsNotEmpty()
  output: string;
}
