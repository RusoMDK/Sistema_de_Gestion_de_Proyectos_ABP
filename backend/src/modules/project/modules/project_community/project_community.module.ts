import { Module } from '@nestjs/common';
import { ProjectCommunityService } from './project_community.service';
import { ProjectCommunityController } from './project_community.controller';

@Module({
  controllers: [ProjectCommunityController],
  providers: [ProjectCommunityService],
})
export class ProjectCommunityModule {}
