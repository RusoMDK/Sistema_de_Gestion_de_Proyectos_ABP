import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { RoleName } from 'src/core/roles/enum/roles.enum';
import { RolesGuard } from 'src/core/auth/guard/roles.guard';
import { Roles } from 'src/core/roles/decorator/roles.decorator';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseGuards(CustomAuthGuard, RolesGuard)
  @Roles(RoleName.USER)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createProjectDto: CreateProjectDto, @Req() req: Request) {
    return this.projectService.create(createProjectDto, req);
  }

  @Get()
  findAll(@Query() query?: FindOptionsDto) {
    return this.projectService.findAll(query || new FindOptionsDto());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() query?: FindOptionsDto) {
    return this.projectService.findOne(id, query);
  }

  @Patch(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}
