import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Test } from 'src/test/entities';
import { TestCase } from 'src/test-cases/entities';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  points: number;

  @ManyToMany(() => Test, (test: Test) => test.questions)
  tests: Test[];

  @OneToMany(() => TestCase, (tcase) => tcase.question, { onDelete: 'CASCADE' })
  @JoinTable()
  test_cases: TestCase[];
}
