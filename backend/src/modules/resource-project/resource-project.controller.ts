import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ResourceProjectService } from './resource-project.service';
import { CreateResourceProjectDto } from './dto/create-resource-project.dto';
import { UpdateResourceProjectDto } from './dto/update-resource-project.dto';
import { AuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('resource-project')
export class ResourceProjectController {
  constructor(
    private readonly resourceProjectService: ResourceProjectService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createResourceProjectDto: CreateResourceProjectDto) {
    return this.resourceProjectService.create(createResourceProjectDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findAll(@Query() query?: FindOptionsDto) {
    return this.resourceProjectService.findAll(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @Query() query?: FindOptionsDto) {
    return this.resourceProjectService.findOne(id, query);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateResourceProjectDto: UpdateResourceProjectDto,
  ) {
    return this.resourceProjectService.update(id, updateResourceProjectDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.resourceProjectService.remove(id);
  }
}
