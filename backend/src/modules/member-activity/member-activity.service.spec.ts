import { Test, TestingModule } from '@nestjs/testing';
import { MemberActivityService } from './member-activity.service';

describe('MemberActivityService', () => {
  let service: MemberActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberActivityService],
    }).compile();

    service = module.get<MemberActivityService>(MemberActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
