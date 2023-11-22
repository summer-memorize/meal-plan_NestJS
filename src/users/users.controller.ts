import {
  Controller,
  Body,
  Post,
  Get,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller()
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signUp(@Body() body) {
    console.log('body:  ', body);
    return { result: 'ok' };
    // return this.usersService.signUp(body);
  }

  @Post('login')
  logIn(@Body() body) {
    console.log('body:  ', body);
    return { result: 'ok' };
    // return this.usersService.logIn(body);
  }

  @Get('logout')
  logOut() {
    return { result: 'ok' };
    // return this.usersService.logOut(body);
  }
}
