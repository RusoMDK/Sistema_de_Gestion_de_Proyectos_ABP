import { Module } from '@nestjs/common';
import { MemberActivityService } from './member-activity.service';
import { MemberActivityController } from './member-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity, Member, Member_Activity } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([Member_Activity, Member, Activity])],
  controllers: [MemberActivityController],
  providers: [MemberActivityService],
})
export class MemberActivityModule {}
