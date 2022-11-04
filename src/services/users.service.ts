import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schemas/users.schema';
import { UserDTO } from '../dtos/users';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private UsersModel: Model<UsersDocument>) {}

  async findAll(): Promise<Users[]> {
    return await this.UsersModel.find();
  }

  async findOne(id: number): Promise<Users> {
    const found = await this.UsersModel.findById(id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async createUser(user: UserDTO) {
    const newUser = new this.UsersModel(user);
    return await newUser.save();
  }
}
