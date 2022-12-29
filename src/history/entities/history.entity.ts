import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from 'src/test/entities';
import { User } from 'src/users/user.entity';
import { Solution } from 'src/solutions/entities';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(() => User)
  user: User;

  @ManyToOne(() => Test, (test: Test) => test.history)
  test: Test;

  @Column()
  isSubmitted: boolean;

  @OneToMany(() => Solution, (solution: Solution) => solution.history, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  solutions: Solution[];

  // @Column({ default: true })
  @Column()
  isVisible: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
