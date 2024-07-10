import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCommunityController } from './project_community.controller';
import { ProjectCommunityService } from './project_community.service';

describe('ProjectCommunityController', () => {
  let controller: ProjectCommunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectCommunityController],
      providers: [ProjectCommunityService],
    }).compile();

    controller = module.get<ProjectCommunityController>(ProjectCommunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
