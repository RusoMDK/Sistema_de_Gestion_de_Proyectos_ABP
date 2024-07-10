import { Test, TestingModule } from '@nestjs/testing';
import { EvetReunionController } from './evet_reunion.controller';
import { EvetReunionService } from './evet_reunion.service';

describe('EvetReunionController', () => {
  let controller: EvetReunionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvetReunionController],
      providers: [EvetReunionService],
    }).compile();

    controller = module.get<EvetReunionController>(EvetReunionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
