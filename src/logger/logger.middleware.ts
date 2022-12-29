import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async use(req: any, res: any, next: () => void) {
    try {
      const cookie = req.cookies['jwt'];
      const jwt = await this.jwtService.verifyAsync(cookie);
      const User = await this.usersRepository.findOneBy({
        email: jwt.result.email,
      });

      if (User) {
        req.user = User;
        console.log(req.user, 'middleware');
        next();
      } else {
        return res.status(401).send('unauthorized');
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}
