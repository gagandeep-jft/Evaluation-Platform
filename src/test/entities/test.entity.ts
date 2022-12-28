import { History } from 'src/history/entities';
import { Invite } from 'src/invites/entities';
import { Question } from 'src/questions/entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  duration: number;

  @ManyToMany(() => Question, (question: Question) => question.tests)
  @JoinTable()
  questions: Question[];
  
  @ManyToMany(() => Invite, (invite: Invite) => invite.tests)
  invites: Invite[];

  @OneToMany(() => History, (history: History) => history.test)
  history: History[];
}
