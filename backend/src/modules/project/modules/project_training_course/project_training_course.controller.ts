import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ProjectTrainingCourseService } from './project_training_course.service';
import { CreateProjectTrainingCourseDto } from './dto/create-project_training_course.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';
// import { UpdateProjectTrainingCourseDto } from './dto/update-project_training_course.dto';

@Controller('project-training-course')
export class ProjectTrainingCourseController {
  constructor(
    private readonly projectTrainingCourseService: ProjectTrainingCourseService,
  ) {}

  @Post()
  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(
    @Body() createProjectTrainingCourseDto: CreateProjectTrainingCourseDto,
  ) {
    return this.projectTrainingCourseService.create(
      createProjectTrainingCourseDto,
    );
  }

  @Get()
  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findAll(@Query() query?: FindOptionsDto) {
    return this.projectTrainingCourseService.findAll(query);
  }

  @Get(':id')
  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findOne(@Param('id') id: string, @Query() query?: FindOptionsDto) {
    return this.projectTrainingCourseService.findOne(id, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectTrainingCourseDto: UpdateProjectTrainingCourseDto) {
  //   return this.projectTrainingCourseService.update(+id, updateProjectTrainingCourseDto);
  // }

  @Delete(':id')
  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  remove(@Param('id') id: string) {
    return this.projectTrainingCourseService.remove(id);
  }
}
