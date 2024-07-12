import { Module } from '@nestjs/common';
import { ProjectCommunityService } from './project_community.service';
import { ProjectCommunityController } from './project_community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityWork } from 'src/core/models/project';
import { Project } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityWork, Project])],
  controllers: [ProjectCommunityController],
  providers: [ProjectCommunityService],
})
export class ProjectCommunityModule {}
