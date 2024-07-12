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
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';
import { CreateEvetSensitizationActivityDto } from './dto/create-evet_sensitization_activity.dto';
// import { UpdateEvetSensitizationActivityDto } from './dto/update-evet_sensitization_activity.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('evet-sensitization-activities')
export class EvetSensitizationActivitiesController {
  constructor(
    private readonly evetSensitizationActivitiesService: EvetSensitizationActivitiesService,
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
    createEvetSensitizationActivityDto: CreateEvetSensitizationActivityDto,
  ) {
    return this.evetSensitizationActivitiesService.create(
      createEvetSensitizationActivityDto,
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
    return this.evetSensitizationActivitiesService.findAll(query);
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
    return this.evetSensitizationActivitiesService.findOne(id, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEvetSensitizationActivityDto: UpdateEvetSensitizationActivityDto) {
  //   return this.evetSensitizationActivitiesService.update(+id, updateEvetSensitizationActivityDto);
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
    return this.evetSensitizationActivitiesService.remove(id);
  }
}
