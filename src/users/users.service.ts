import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { AppError } from 'src/utils/appError';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModule: Model<UsersDocument>,
  ) {}

  async findAll() {
    return await this.usersModule.find();
  }

  async findOne(id: string) {
    const user = await this.usersModule.findById(id);

    if (!user) {
      return new AppError('User dont exists', 404);
    }

    user.password = undefined;

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModule.findById(id);

    if (!user) {
      return new AppError('User dont exists', 404);
    }

    user.update(updateUserDto);
    return 'User updated';
  }

  async remove(id: string) {
    const user = await this.usersModule.findById(id);

    if (!user) {
      return new AppError('User dont exists', 404);
    }

    user.delete();
    return 'User deleted';
  }
}
