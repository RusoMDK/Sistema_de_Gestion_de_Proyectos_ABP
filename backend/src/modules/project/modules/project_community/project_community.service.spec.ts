import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCommunityService } from './project_community.service';

describe('ProjectCommunityService', () => {
  let service: ProjectCommunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectCommunityService],
    }).compile();

    service = module.get<ProjectCommunityService>(ProjectCommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
