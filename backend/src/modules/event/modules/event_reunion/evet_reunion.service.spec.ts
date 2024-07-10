import { Test, TestingModule } from '@nestjs/testing';
import { EvetReunionService } from './evet_reunion.service';

describe('EvetReunionService', () => {
  let service: EvetReunionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvetReunionService],
    }).compile();

    service = module.get<EvetReunionService>(EvetReunionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
