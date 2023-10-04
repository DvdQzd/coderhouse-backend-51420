import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
    private config: ConfigService,
    ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModel.find({email: createUserDto.email});
    if (user.length > 0) {
      throw new HttpException('User Exists', HttpStatus.BAD_REQUEST)
    }
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    console.log(this.config.get<string>('TEXTO_RANDOM'));
    return this.usersModel.find();
  }

  findOne(id: string) {
    return this.usersModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModel.findById(id);
    user.first_name = updateUserDto.first_name;
    user.last_name = updateUserDto.last_name;
    user.email = updateUserDto.email;
    return user.save();
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id);
  }
}
