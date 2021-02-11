import { Test, TestingModule } from '@nestjs/testing';
import { TasksProvider } from './tasks.provider';

describe('TasksProvider', () => {
  let provider: TasksProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksProvider],
    }).compile();

    provider = module.get<TasksProvider>(TasksProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
