import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TasksProvider {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  getAll = async () => await this.taskModel.find().exec();

  getById = async (id: string) => await this.taskModel.findById(id).exec();

  async create(task: Task): Promise<Task> {
    const createTask = new this.taskModel(task);
    return await createTask.save();
  }

  async update(task: Task) {
    await this.taskModel.updateOne({ _id: task.id }, task).exec();
    return this.getById(task.id);
  }

  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
