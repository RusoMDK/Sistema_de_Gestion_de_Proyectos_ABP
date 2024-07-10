import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';
import { CreateProjectSocioeconomicActivityDto } from './dto/create-project_socioeconomic_activity.dto';
import { UpdateProjectSocioeconomicActivityDto } from './dto/update-project_socioeconomic_activity.dto';

@Controller('project-socioeconomic-activities')
export class ProjectSocioeconomicActivitiesController {
  constructor(private readonly projectSocioeconomicActivitiesService: ProjectSocioeconomicActivitiesService) {}

  @Post()
  create(@Body() createProjectSocioeconomicActivityDto: CreateProjectSocioeconomicActivityDto) {
    return this.projectSocioeconomicActivitiesService.create(createProjectSocioeconomicActivityDto);
  }

  @Get()
  findAll() {
    return this.projectSocioeconomicActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectSocioeconomicActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectSocioeconomicActivityDto: UpdateProjectSocioeconomicActivityDto) {
    return this.projectSocioeconomicActivitiesService.update(+id, updateProjectSocioeconomicActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectSocioeconomicActivitiesService.remove(+id);
  }
}
