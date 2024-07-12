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
import { ProjectCommunityService } from './project_community.service';
import { CreateProjectCommunityDto } from './dto/create-project_community.dto';
// import { UpdateProjectCommunityDto } from './dto/update-project_community.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('project-community')
export class ProjectCommunityController {
  constructor(
    private readonly projectCommunityService: ProjectCommunityService,
  ) {}

  @Post()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createProjectCommunityDto: CreateProjectCommunityDto) {
    return this.projectCommunityService.create(createProjectCommunityDto);
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
    return this.projectCommunityService.findAll(query);
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
    return this.projectCommunityService.findOne(id, query);
  }

  // @Patch(':id')
  // @UseGuards(CustomAuthGuard)
  // @UsePipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // )
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProjectCommunityDto: UpdateProjectCommunityDto,
  // ) {
  //   return this.projectCommunityService.update(id, updateProjectCommunityDto);
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
    return this.projectCommunityService.remove(id);
  }
}
