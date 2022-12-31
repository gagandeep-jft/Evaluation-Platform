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

  @Column()
  script: string;

  @Column()
  language: string;

  @Column()
  versionIndex: number;
  
  @OneToMany(() => TestCase, (tcase) => tcase.question, {
    cascade: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinTable({})
  test_cases: TestCase[];

  @ManyToMany(() => Test, (test: Test) => test.questions)
  tests: Test[];
}
