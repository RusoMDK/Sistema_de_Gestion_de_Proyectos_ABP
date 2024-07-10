import { Test, TestingModule } from '@nestjs/testing';
import { ProjectInfrastructureService } from './project_infrastructure.service';

describe('ProjectInfrastructureService', () => {
  let service: ProjectInfrastructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectInfrastructureService],
    }).compile();

    service = module.get<ProjectInfrastructureService>(ProjectInfrastructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
