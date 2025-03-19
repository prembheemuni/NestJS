import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      _id: 1,
      name: 'Prem',
      gender: 'male',
      age: 21,
    },
    {
      _id: 2,
      name: 'Kumar',
      gender: 'male',
      age: 22,
    },
    {
      _id: 3,
      name: 'John',
      gender: 'male',
      age: 24,
    },
  ];

  getAllUsers(): UserDto[] {
    return this.users;
  }

  createNewUser(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  }
}
