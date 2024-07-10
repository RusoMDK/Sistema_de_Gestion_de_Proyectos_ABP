import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';

describe('ProjectSocioeconomicActivitiesService', () => {
  let service: ProjectSocioeconomicActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectSocioeconomicActivitiesService],
    }).compile();

    service = module.get<ProjectSocioeconomicActivitiesService>(ProjectSocioeconomicActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
