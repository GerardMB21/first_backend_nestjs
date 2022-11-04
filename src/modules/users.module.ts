import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UsersService } from 'src/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
