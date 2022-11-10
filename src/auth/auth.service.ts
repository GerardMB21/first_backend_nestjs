import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/schema/users.schema';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { genSalt, hash, compare } from 'bcrypt';
import { AppError } from 'src/utils/appError';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private usersModule: Model<UsersDocument>,
    private jwtAuthService: JwtService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const { password } = createAuthDto;
    const salt: string = await genSalt(12);
    const newPass: string = await hash(password, salt);
    const body = {
      ...createAuthDto,
      password: newPass,
    };
    const newUser = await this.usersModule.create(body);
    newUser.password = undefined;
    return newUser;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const user = await this.usersModule.findOne({ email });

    if (!user) {
      return 'Error email';
    }

    const { _id, name, last_name, age } = user;

    const valid = await compare(password, user.password);

    if (!valid) {
      return new AppError('Error password', 403);
    }

    const payload = {
      _id,
      name,
      last_name,
      age,
      email,
    };

    const token = this.jwtAuthService.sign(payload);

    return {
      message: 'Login successful',
      session: payload,
      token,
    };
  }
}
