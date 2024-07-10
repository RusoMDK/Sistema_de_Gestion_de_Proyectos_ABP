import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import {
  ProjectCommunityModule,
  ProjectInfrastructureModule,
  ProjectSocioeconomicActivitiesModule,
  ProjectTrainingCourseModule,
} from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/core/models/public';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    ProjectCommunityModule,
    ProjectInfrastructureModule,
    ProjectSocioeconomicActivitiesModule,
    ProjectTrainingCourseModule,
    TypeOrmModule.forFeature([Project]),
  ],
})
export class ProjectModule {}
