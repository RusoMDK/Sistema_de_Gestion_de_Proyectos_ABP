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
import { ProjectSocioeconomicActivitiesService } from './project_socioeconomic_activities.service';
import { CreateProjectSocioeconomicActivityDto } from './dto/create-project_socioeconomic_activity.dto';
// import { UpdateProjectSocioeconomicActivityDto } from './dto/update-project_socioeconomic_activity.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('project-socioeconomic-activities')
export class ProjectSocioeconomicActivitiesController {
  constructor(
    private readonly projectSocioeconomicActivitiesService: ProjectSocioeconomicActivitiesService,
  ) {}

  @Post()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(
    @Body()
    createProjectSocioeconomicActivityDto: CreateProjectSocioeconomicActivityDto,
  ) {
    return this.projectSocioeconomicActivitiesService.create(
      createProjectSocioeconomicActivityDto,
    );
  }

  @Get()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findAll(@Query() query?: FindOptionsDto) {
    return this.projectSocioeconomicActivitiesService.findAll(query);
  }

  @Get(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findOne(@Param('id') id: string, @Query() query?: FindOptionsDto) {
    return this.projectSocioeconomicActivitiesService.findOne(id, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectSocioeconomicActivityDto: UpdateProjectSocioeconomicActivityDto) {
  //   return this.projectSocioeconomicActivitiesService.update(+id, updateProjectSocioeconomicActivityDto);
  // }

  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  remove(@Param('id') id: string) {
    return this.projectSocioeconomicActivitiesService.remove(id);
  }
}
