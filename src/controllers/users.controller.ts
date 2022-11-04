import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { User } from '../interfaces/users.interface';
import { UserDTO } from '../dtos/users';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): object {
    return {
      status: 'OK',
      users: this.usersService.findAll(),
    };
  }

  @Get(':id')
  getUser(@Param('id') id: string): object {
    return {
      status: 'OK',
      users: this.usersService.findOne(parseInt(id)),
    };
  }

  @Post()
  createUsers(@Body() user: UserDTO): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() user: UserDTO): object {
    console.log(id, user);
    return {
      status: 'OK',
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): object {
    console.log(id);
    return {
      status: 'OK',
    };
  }
}
