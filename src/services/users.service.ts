import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/users.interface';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'javier',
      last_name: 'matos',
    },
    {
      id: 2,
      name: 'lucas',
      last_name: 'matos',
    },
    {
      id: 3,
      name: 'danna',
      last_name: 'matos',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }
}
