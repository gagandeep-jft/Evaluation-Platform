import { Question } from 'src/questions/entities';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class TestCase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, (question: Question) => question.test_cases, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
  })
  question: Question;

  @Column()
  stdin: string;

  @Column()
  output: string;
}
