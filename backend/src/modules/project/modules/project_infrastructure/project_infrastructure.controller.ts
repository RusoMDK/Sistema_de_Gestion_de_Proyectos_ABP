import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectInfrastructureService } from './project_infrastructure.service';
import { CreateProjectInfrastructureDto } from './dto/create-project_infrastructure.dto';
import { UpdateProjectInfrastructureDto } from './dto/update-project_infrastructure.dto';

@Controller('project-infrastructure')
export class ProjectInfrastructureController {
  constructor(private readonly projectInfrastructureService: ProjectInfrastructureService) {}

  @Post()
  create(@Body() createProjectInfrastructureDto: CreateProjectInfrastructureDto) {
    return this.projectInfrastructureService.create(createProjectInfrastructureDto);
  }

  @Get()
  findAll() {
    return this.projectInfrastructureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectInfrastructureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectInfrastructureDto: UpdateProjectInfrastructureDto) {
    return this.projectInfrastructureService.update(+id, updateProjectInfrastructureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectInfrastructureService.remove(+id);
  }
}
