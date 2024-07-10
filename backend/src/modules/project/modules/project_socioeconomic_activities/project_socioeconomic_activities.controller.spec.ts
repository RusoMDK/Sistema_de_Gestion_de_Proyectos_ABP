import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSocioeconomicActivitiesController } from './project_socioeconomic_activities.controller';
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';

describe('ProjectSocioeconomicActivitiesController', () => {
  let controller: ProjectSocioeconomicActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectSocioeconomicActivitiesController],
      providers: [ProjectSocioeconomicActivitiesService],
    }).compile();

    controller = module.get<ProjectSocioeconomicActivitiesController>(ProjectSocioeconomicActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
