import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.id = this.users.length + 1;
    newUser.first_name = createUserDto.first_name;
    newUser.last_name = createUserDto.last_name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    newUser.avatar = createUserDto.avatar;
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users[id];
    user.first_name = updateUserDto.first_name;
    user.last_name = updateUserDto.last_name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.avatar = updateUserDto.avatar;
    return user;
  }

  remove(id: number) {
    const user = this.users[id];
    this.users.splice(id, 1);
    return user;
  }
}
