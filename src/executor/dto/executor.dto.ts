import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';

export class executorDto {
  @IsNotEmpty()
  @IsString()
  script: string;

  @IsNotEmpty()
  @IsString()
  lang: string;

  @IsNotEmpty()
  @IsNumberString()
  versionIndex: string;
}
