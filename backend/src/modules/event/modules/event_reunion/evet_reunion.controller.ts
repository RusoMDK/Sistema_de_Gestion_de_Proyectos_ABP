import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvetReunionService } from './evet_reunion.service';
import { CreateEvetReunionDto } from './dto/create-evet_reunion.dto';
import { UpdateEvetReunionDto } from './dto/update-evet_reunion.dto';

@Controller('evet-reunion')
export class EvetReunionController {
  constructor(private readonly evetReunionService: EvetReunionService) {}

  @Post()
  create(@Body() createEvetReunionDto: CreateEvetReunionDto) {
    return this.evetReunionService.create(createEvetReunionDto);
  }

  @Get()
  findAll() {
    return this.evetReunionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evetReunionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvetReunionDto: UpdateEvetReunionDto) {
    return this.evetReunionService.update(+id, updateEvetReunionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evetReunionService.remove(+id);
  }
}
