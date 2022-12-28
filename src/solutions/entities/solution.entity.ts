import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { History } from 'src/history/entities';

@Entity()
export class Solution {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => History, (history: History) => history.solutions)
  history: History;

  @Column()
  script: string;

  @Column()
  language: string;

  @Column()
  versionIndex: number;

  @Column()
  score: number;
}
