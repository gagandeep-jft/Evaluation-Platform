import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async googleLogin(req) {
    if (!req.user) {
    } else {
      let User = await this.usersRepository.findOneBy({
        email: req.user.email,
      });
      let token = await this.jwtService.sign({ User });
      console.log(token);
      await response.cookie('jft', token, { httpOnly: true });
      return response.status(200).send({ token: token });
    }
  }

  async hashPW(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async register(user,res) {
    let User = await this.usersRepository.findOneBy({ email: user.email });
    if (User) {
      return res.status(401).send({ message: 'User already exist' });
    }
    const password = await this.hashPW(user.password);
    user = { ...user, password };
    console.log(user);

     await this.usersRepository.save(user);
     return res.status(200).send(user);
  }

  async signin(user, res) {
    let User = await this.usersRepository.findOneBy({ email: user.email });

    console.log(User);
    

    if (!User) {
      return res
        .status(401)
        .send({ message: 'email or password is incorrect' });
    } else if (
      User &&
      bcrypt.compare(user.password,User.password)
    ) {
      // console.log(User);
      const { password, ...result } = user;
      let token = await this.jwtService.sign({ result });
      // console.log(token);
      await res.cookie('Ep', token, { httpOnly: true });
      return res.status(200).send({ token: token });
    }
  }
}
