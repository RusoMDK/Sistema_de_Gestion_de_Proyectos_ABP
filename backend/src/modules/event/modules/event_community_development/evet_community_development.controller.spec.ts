import { Test, TestingModule } from '@nestjs/testing';
import { EvetCommunityDevelopmentController } from './evet_community_development.controller';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';

describe('EvetCommunityDevelopmentController', () => {
  let controller: EvetCommunityDevelopmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvetCommunityDevelopmentController],
      providers: [EvetCommunityDevelopmentService],
    }).compile();

    controller = module.get<EvetCommunityDevelopmentController>(EvetCommunityDevelopmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
