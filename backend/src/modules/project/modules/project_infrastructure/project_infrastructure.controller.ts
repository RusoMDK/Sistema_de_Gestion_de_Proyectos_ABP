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
import { ProjectInfrastructureService } from './project_infrastructure.service';
import { CreateProjectInfrastructureDto } from './dto/create-project_infrastructure.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';
// import { UpdateProjectInfrastructureDto } from './dto/update-project_infrastructure.dto';

@Controller('project-infrastructure')
export class ProjectInfrastructureController {
  constructor(
    private readonly projectInfrastructureService: ProjectInfrastructureService,
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
    @Body() createProjectInfrastructureDto: CreateProjectInfrastructureDto,
  ) {
    return this.projectInfrastructureService.create(
      createProjectInfrastructureDto,
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
    console.log('entrando');
    return this.projectInfrastructureService.findAll(query);
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
    return this.projectInfrastructureService.findOne(id, query);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProjectInfrastructureDto: UpdateProjectInfrastructureDto,
  // ) {
  //   return this.projectInfrastructureService.update(
  //     +id,
  //     updateProjectInfrastructureDto,
  //   );
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
    return this.projectInfrastructureService.remove(id);
  }
}
