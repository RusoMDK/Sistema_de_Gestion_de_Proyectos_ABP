import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';
import { CreateEvetSensitizationActivityDto } from './dto/create-evet_sensitization_activity.dto';
import { UpdateEvetSensitizationActivityDto } from './dto/update-evet_sensitization_activity.dto';

@Controller('evet-sensitization-activities')
export class EvetSensitizationActivitiesController {
  constructor(private readonly evetSensitizationActivitiesService: EvetSensitizationActivitiesService) {}

  @Post()
  create(@Body() createEvetSensitizationActivityDto: CreateEvetSensitizationActivityDto) {
    return this.evetSensitizationActivitiesService.create(createEvetSensitizationActivityDto);
  }

  @Get()
  findAll() {
    return this.evetSensitizationActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evetSensitizationActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvetSensitizationActivityDto: UpdateEvetSensitizationActivityDto) {
    return this.evetSensitizationActivitiesService.update(+id, updateEvetSensitizationActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evetSensitizationActivitiesService.remove(+id);
  }
}
