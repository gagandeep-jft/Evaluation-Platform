import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
import { Test } from '@nestjs/testing';
import { Type } from 'class-transformer';
import { User } from 'src/users/user.entity';

class SolutionDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  questionId: number;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  versionIndex: number;

  @IsNotEmpty()
  @IsString()
  script: string;
}

export class HistoryDto {
  @Type(() => Number)
  id?: number;


  userId: number;
  testId: number;
  
  @IsNotEmpty()
  @IsBoolean()
  isSubmitted: boolean;

  @IsBoolean()
  isVisible?: boolean;

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => SolutionDto)
  solution?: SolutionDto[];
}
