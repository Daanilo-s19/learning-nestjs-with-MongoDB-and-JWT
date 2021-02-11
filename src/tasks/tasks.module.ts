import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';
import { TasksProvider } from './shared/tasks.provider';
import { TasksController } from './tasks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksProvider],
})
export class TasksModule {}
