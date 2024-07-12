import { Module } from '@nestjs/common';
import { MemberActivityService } from './member-activity.service';
import { MemberActivityController } from './member-activity.controller';

@Module({
  controllers: [MemberActivityController],
  providers: [MemberActivityService],
})
export class MemberActivityModule {}
