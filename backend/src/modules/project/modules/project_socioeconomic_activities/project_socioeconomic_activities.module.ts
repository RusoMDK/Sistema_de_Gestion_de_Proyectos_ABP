import { Module } from '@nestjs/common';
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';
import { ProjectSocioeconomicActivitiesController } from './project_socioeconomic_activities.controller';

@Module({
  controllers: [ProjectSocioeconomicActivitiesController],
  providers: [ProjectSocioeconomicActivitiesService],
})
export class ProjectSocioeconomicActivitiesModule {}
