import { Test } from 'src/test/entities';
import { User } from 'src/users/user.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Invite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user: User) => user.invites)
  user: User;

  @ManyToMany(() => Test, (test: Test) => test.invites)
  @JoinTable()
  tests: Test[];
}
