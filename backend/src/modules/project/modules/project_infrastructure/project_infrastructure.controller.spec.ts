import { Test, TestingModule } from '@nestjs/testing';
import { ProjectInfrastructureController } from './project_infrastructure.controller';
import { ProjectInfrastructureService } from './project_infrastructure.service';

describe('ProjectInfrastructureController', () => {
  let controller: ProjectInfrastructureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectInfrastructureController],
      providers: [ProjectInfrastructureService],
    }).compile();

    controller = module.get<ProjectInfrastructureController>(ProjectInfrastructureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
