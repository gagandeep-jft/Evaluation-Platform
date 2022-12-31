import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
} from '@nestjs/class-validator';
import { Type } from 'class-transformer';
import { TestCaseDto } from 'src/test-cases/dto/create-test-case.dto';

export class CreateQuestionDTO {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  script: string;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsNumber()
  versionIndex: number;

  @IsNotEmpty()
  @IsNumber()
  points: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TestCaseDto)
  test_cases: TestCaseDto[];
}
