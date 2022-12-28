import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';
import { Question } from 'src/questions/entities';
import { OneToMany } from 'typeorm';

export class testDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  uid: string;

  @IsNumber()
  timetaken: number;

  @IsNotEmpty()
  @IsArray()
  @OneToMany(() => Question, (question: Question) => question)
  questions: Question[];
}
