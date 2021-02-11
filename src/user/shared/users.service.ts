import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  getAll = async () => await this.userModel.find().exec();
  getById = async (id: string) => await this.userModel.findById({ id }).exec();
  getByEmail = async (email: string) =>
    await this.userModel.findOne({ email }).exec();
  create = async (user: User) => await new this.userModel(user).save();
  update = async (user: User) =>
    await this.userModel.updateOne({ _id: user.id }, user).exec();

  delete = async (user: User) =>
    await this.userModel.deleteOne({ _id: user.id });
}
