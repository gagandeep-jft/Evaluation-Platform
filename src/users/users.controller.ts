import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('dashboard')
  // @UseGuards(authGuard("admin"))
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this.userService.findOne(id);
  }
  @Post('create')
  create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    // const { name, email, password, role } = createUserDTO;
    // const hashedPW = this.userService.hashPW(password)
    return this.userService.create(createUserDTO);
  }

  @Post('update/:id')
  update(
    @Param('id') id: number,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.update(id, updateUserDTO);
  }

  @Post('delete/:id')
  delete(@Param('id') id: number): Promise<User> {
    return this.userService.remove(id);
  }
}
