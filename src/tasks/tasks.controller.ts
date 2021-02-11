import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Task } from './shared/task';
import { TasksProvider } from './shared/tasks.provider';

@Controller('tasks')
export class TasksController {
  constructor(private taskProvider: TasksProvider) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskProvider.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskProvider.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskProvider.create(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() task: Task): Promise<Task> {
    return this.taskProvider.update(task);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Array<Task>> {
    return this.taskProvider.delete(id);
  }
}
