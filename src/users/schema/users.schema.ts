/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({required: true})
  name: string;
  
  @Prop({required: true})
  last_name: string;
  
  @Prop({required: true})
  age: number;

  @Prop({unique: true})
  email: string;

  @Prop({required: true})
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);