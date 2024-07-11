import { Test, TestingModule } from '@nestjs/testing';
import { ResourceProjectController } from './resource-project.controller';
import { ResourceProjectService } from './resource-project.service';

describe('ResourceProjectController', () => {
  let controller: ResourceProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceProjectController],
      providers: [ResourceProjectService],
    }).compile();

    controller = module.get<ResourceProjectController>(ResourceProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
