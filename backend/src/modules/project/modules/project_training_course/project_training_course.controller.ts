import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTrainingCourseService } from './project_training_course.service';
import { CreateProjectTrainingCourseDto } from './dto/create-project_training_course.dto';
import { UpdateProjectTrainingCourseDto } from './dto/update-project_training_course.dto';

@Controller('project-training-course')
export class ProjectTrainingCourseController {
  constructor(private readonly projectTrainingCourseService: ProjectTrainingCourseService) {}

  @Post()
  create(@Body() createProjectTrainingCourseDto: CreateProjectTrainingCourseDto) {
    return this.projectTrainingCourseService.create(createProjectTrainingCourseDto);
  }

  @Get()
  findAll() {
    return this.projectTrainingCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectTrainingCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectTrainingCourseDto: UpdateProjectTrainingCourseDto) {
    return this.projectTrainingCourseService.update(+id, updateProjectTrainingCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectTrainingCourseService.remove(+id);
  }
}
