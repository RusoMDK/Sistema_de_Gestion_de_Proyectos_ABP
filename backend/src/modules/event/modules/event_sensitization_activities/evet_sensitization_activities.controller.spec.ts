import { Test, TestingModule } from '@nestjs/testing';
import { EvetSensitizationActivitiesController } from './evet_sensitization_activities.controller';
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';

describe('EvetSensitizationActivitiesController', () => {
  let controller: EvetSensitizationActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvetSensitizationActivitiesController],
      providers: [EvetSensitizationActivitiesService],
    }).compile();

    controller = module.get<EvetSensitizationActivitiesController>(EvetSensitizationActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
