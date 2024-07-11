import { Test, TestingModule } from '@nestjs/testing';
import { ResourceProjectService } from './resource-project.service';

describe('ResourceProjectService', () => {
  let service: ResourceProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceProjectService],
    }).compile();

    service = module.get<ResourceProjectService>(ResourceProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
