import { Module } from '@nestjs/common';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';
import { EvetCommunityDevelopmentController } from './evet_community_development.controller';

@Module({
  controllers: [EvetCommunityDevelopmentController],
  providers: [EvetCommunityDevelopmentService],
})
export class EvetCommunityDevelopmentModule {}
