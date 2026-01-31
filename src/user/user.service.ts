// /user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // const createdUser = new this.userModel(createUserDto);
    // return createdUser.save();
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      console.error('CREATE USER ERROR:', error);
      throw error;
    }
  }

  async findAll(filters: FilterUserDto): Promise<User[]> {
    const query: Record<string, any> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined) return;

      if (key === 'fullName') {
        query.fullName = { $regex: value, $options: 'i' };
      } else {
        query[key] = value;
      }
    });
    return this.userModel.find(query).exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    ).exec();

    if(!updateUser){
      throw new NotFoundException('User Not Found');
    }
    return updateUser;
  }

  async remove(id: string): Promise<{ _id: string }> {
    const deleteUser = await this.userModel.findByIdAndDelete(id).exec();

    if(!deleteUser){
      throw new NotFoundException('User not found');
    }
    return { _id: deleteUser._id.toString() };
  }

}
