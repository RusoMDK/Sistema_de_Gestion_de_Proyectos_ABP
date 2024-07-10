import { Test, TestingModule } from '@nestjs/testing';
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';

describe('EvetSensitizationActivitiesService', () => {
  let service: EvetSensitizationActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvetSensitizationActivitiesService],
    }).compile();

    service = module.get<EvetSensitizationActivitiesService>(EvetSensitizationActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
