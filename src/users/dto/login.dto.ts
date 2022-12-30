import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
