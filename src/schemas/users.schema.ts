/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Users {
  @Prop()
  name: string;
  
  @Prop()
  last_name: string;
}

export type UsersDocument = HydratedDocument<Users>;

export const UsersSchema = SchemaFactory.createForClass(Users);
