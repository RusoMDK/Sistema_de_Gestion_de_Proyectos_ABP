import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTrainingCourseService } from './project_training_course.service';

describe('ProjectTrainingCourseService', () => {
  let service: ProjectTrainingCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectTrainingCourseService],
    }).compile();

    service = module.get<ProjectTrainingCourseService>(ProjectTrainingCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
