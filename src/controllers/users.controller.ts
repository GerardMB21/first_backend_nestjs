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
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(): {
    status: string;
    users: User[];
  } {
    return {
      status: 'OK',
      users: this.userService.getUsers(),
    };
  }

  @Get(':id')
  getUser(@Param('id') id: string): {
    status: string;
    users: User;
  } {
    return {
      status: 'OK',
      users: this.userService.getUser(parseInt(id)),
    };
  }

  @Post()
  createUsers(@Body() user: UserDTO): {
    status: string;
    user: User;
  } {
    return {
      status: 'OK',
      user: {
        id: 1,
        name: user.name,
        last_name: user.last_name,
      },
    };
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
