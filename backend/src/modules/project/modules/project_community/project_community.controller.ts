import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectCommunityService } from './project_community.service';
import { CreateProjectCommunityDto } from './dto/create-project_community.dto';
import { UpdateProjectCommunityDto } from './dto/update-project_community.dto';

@Controller('project-community')
export class ProjectCommunityController {
  constructor(
    private readonly projectCommunityService: ProjectCommunityService,
  ) {}

  @Post()
  create(@Body() createProjectCommunityDto: CreateProjectCommunityDto) {
    return this.projectCommunityService.create(createProjectCommunityDto);
  }

  @Get()
  findAll() {
    return this.projectCommunityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectCommunityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectCommunityDto: UpdateProjectCommunityDto,
  ) {
    return this.projectCommunityService.update(+id, updateProjectCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectCommunityService.remove(+id);
  }
}
