import { Module } from '@nestjs/common';
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';
import { ProjectSocioeconomicActivitiesController } from './project_socioeconomic_activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioeconomicActivities } from 'src/core/models/project';
import { Project } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([SocioeconomicActivities, Project])],
  controllers: [ProjectSocioeconomicActivitiesController],
  providers: [ProjectSocioeconomicActivitiesService],
})
export class ProjectSocioeconomicActivitiesModule {}
