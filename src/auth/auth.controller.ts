import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport'
import { CreateUserDTO } from './dto/create-user.dto';
import { SignInUserDTO } from './dto/update-user.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

  @Get("google/login")
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

  @Post('register')
  async register(@Body() registerUser:CreateUserDTO,@Res() res){
    return this.authService.register(registerUser,res);
  }

  @Post("login")
  async signin(@Body() signin:SignInUserDTO, @Res() res ){
    return this.authService.signin(signin,res);
  }

  

  
}

