import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
import { Type } from 'class-transformer';

class SolutionDto {
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsNumber()
  versionIndex: number;

  @IsNotEmpty()
  @IsString()
  script: string;
}

export class HistoryDto {
  id?: number;
  
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  
  @IsNotEmpty()
  @IsNumber()
  testId: number;

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => SolutionDto)
  solution: SolutionDto[];
}
