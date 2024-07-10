import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTrainingCourseController } from './project_training_course.controller';
import { ProjectTrainingCourseService } from './project_training_course.service';

describe('ProjectTrainingCourseController', () => {
  let controller: ProjectTrainingCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTrainingCourseController],
      providers: [ProjectTrainingCourseService],
    }).compile();

    controller = module.get<ProjectTrainingCourseController>(ProjectTrainingCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
