import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateAuthDto) {
  @IsString()
  name?: string;

  @IsString()
  last_name?: string;

  @IsNumber()
  age?: number;

  @IsString()
  @MinLength(8)
  password?: string;
}
