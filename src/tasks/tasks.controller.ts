import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';
import { TasksProvider } from './shared/tasks.provider';

@Controller('tasks')
export class TasksController {
  constructor(private taskProvider: TasksProvider) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskProvider.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskProvider.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskProvider.create(task);
  }

  @Put()
  async update(@Body() task: Task): Promise<Task> {
    return this.taskProvider.update(task);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Array<Task>> {
    return this.taskProvider.delete(id);
  }
}
