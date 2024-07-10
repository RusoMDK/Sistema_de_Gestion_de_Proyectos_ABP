import { Test, TestingModule } from '@nestjs/testing';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';

describe('EvetCommunityDevelopmentService', () => {
  let service: EvetCommunityDevelopmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvetCommunityDevelopmentService],
    }).compile();

    service = module.get<EvetCommunityDevelopmentService>(EvetCommunityDevelopmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
