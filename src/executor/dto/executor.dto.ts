import { IsNumber, IsOptional } from '@nestjs/class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

export class executorDto {
  @IsNotEmpty()
  @IsString()
  script: string;

  @IsOptional()
  @IsString()
  stdin?: string;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsNumber()
  versionIndex: number;
}
