import { Test, TestingModule } from '@nestjs/testing';
import { MemberActivityController } from './member-activity.controller';
import { MemberActivityService } from './member-activity.service';

describe('MemberActivityController', () => {
  let controller: MemberActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberActivityController],
      providers: [MemberActivityService],
    }).compile();

    controller = module.get<MemberActivityController>(MemberActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
