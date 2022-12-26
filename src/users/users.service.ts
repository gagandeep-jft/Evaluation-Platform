import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async hashPW(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds)
    return hash;
  }

  async create(newUser: CreateUserDTO): Promise<User> {
    const password = await this.hashPW(newUser.password)
    newUser = {...newUser, password}
    console.log(newUser);
    
    return await this.usersRepository.save(newUser);
  }

  async update(id: number, updUser: UpdateUserDTO): Promise<User> {
    const user = await this.findOne(id);

    user.name = updUser.name ? updUser.name : user.name
    user.email = updUser.email ? updUser.email : user.email
    user.password = updUser.password ? updUser.password : user.password
    user.role = updUser.role ? updUser.role : user.role

    return await this.usersRepository.save(user);

  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
