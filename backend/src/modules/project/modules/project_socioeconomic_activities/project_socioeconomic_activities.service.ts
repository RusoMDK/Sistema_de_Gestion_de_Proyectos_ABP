import { Injectable } from '@nestjs/common';
import { CreateProjectSocioeconomicActivityDto } from './dto/create-project_socioeconomic_activity.dto';
import { UpdateProjectSocioeconomicActivityDto } from './dto/update-project_socioeconomic_activity.dto';

@Injectable()
export class ProjectSocioeconomicActivitiesService {
  create(createProjectSocioeconomicActivityDto: CreateProjectSocioeconomicActivityDto) {
    return 'This action adds a new projectSocioeconomicActivity';
  }

  findAll() {
    return `This action returns all projectSocioeconomicActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectSocioeconomicActivity`;
  }

  update(id: number, updateProjectSocioeconomicActivityDto: UpdateProjectSocioeconomicActivityDto) {
    return `This action updates a #${id} projectSocioeconomicActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectSocioeconomicActivity`;
  }
}
