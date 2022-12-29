import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async googleLogin(@Req() req, @Res() res) {
    console.log('google login', req.user);
    if (!req.user) {
    } else {
      const User = await this.usersService.findBy({ email: req.user.email });
      const token = this.jwtService.sign({ User });
      console.log(token);
      res.cookie('jwt', token);
      return res.status(200).send({ token: token });
    }
  }

  async register(user: CreateUserDTO) {
    return await this.usersService.create(user);
  }

  async signin(user, @Res() res) {
    const result = await this.usersService.findBy({ email: user.email });

    if (await this.usersService.verifyPassword(result, user.password)) {
      const { password, ...result } = user;
      const token = this.jwtService.sign({ result });
      await res.cookie('jwt', token, { httpOnly: true });
      console.log(user);
      return res.status(200).send({ token: token });
    }
    return res.status(400).send({ message: 'email or passsword incorrect' });
  }
}
