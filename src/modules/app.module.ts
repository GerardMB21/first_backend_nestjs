import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from '../services/app.service';
import { UsersService } from '../services/users.service';
import { AppController } from '../controllers/app.controller';
import { UsersController } from '../controllers/users.controller';
import { UsersModule } from './users.module';
// import { Users } from 'src/schemas/users.schema';

const cluster: string = process.env.CLUSTER;

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(cluster, {
      connectionName: 'users',
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
