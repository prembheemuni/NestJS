import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserFilterDto } from './dto/userFilter.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers(): UserDto[] {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createNewUser(user);
  }

  @Get('filters')
  getUsersFilter(@Query() query: UserFilterDto) {
    return { query };
  }
}
