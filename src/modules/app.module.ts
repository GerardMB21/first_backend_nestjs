import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { UsersModule } from './users.module';
import { MongooseModule } from '@nestjs/mongoose';

const cluster: string = process.env.CLUSTER;

@Module({
  imports: [UsersModule, MongooseModule.forRoot(cluster)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
