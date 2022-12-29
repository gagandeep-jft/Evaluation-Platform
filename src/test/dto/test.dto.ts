import { IsDate, IsOptional } from '@nestjs/class-validator';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';
import { Question } from 'src/questions/entities';

export class testDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  uid: string;

  @IsNotEmpty()
  @IsArray()
  questions: Question[];
}

export class TestStartDto {
  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsOptional()
  @IsDate()
  submittedAt?: Date;
}
