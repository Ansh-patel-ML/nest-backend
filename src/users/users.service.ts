import { Injectable } from '@nestjs/common';

import { UserRole } from './types';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

let lastUserId = 5;

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Ansh Patel',
      email: 'patelansh883@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Shubham Navadiya',
      email: 'navadiya@gmail.com',
      role: 'INERN',
    },
    {
      id: 3,
      name: 'Patrick John',
      email: 'patrick@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'JSAH Shah',
      email: 'SHAHjash@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Ashish Magnani',
      email: 'ashishMag@gmail.com',
      role: 'INTERN',
    },
  ];

  findMany(role?: UserRole) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDTO: CreateUserDTO) {
    const newUser = {
      id: lastUserId + 1,
      ...createUserDTO,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDTO: UpdateUserDTO) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDTO,
        };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
