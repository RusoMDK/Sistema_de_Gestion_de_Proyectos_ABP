import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';
import { CreateEvetCommunityDevelopmentDto } from './dto/create-evet_community_development.dto';
import { UpdateEvetCommunityDevelopmentDto } from './dto/update-evet_community_development.dto';

@Controller('evet-community-development')
export class EvetCommunityDevelopmentController {
  constructor(private readonly evetCommunityDevelopmentService: EvetCommunityDevelopmentService) {}

  @Post()
  create(@Body() createEvetCommunityDevelopmentDto: CreateEvetCommunityDevelopmentDto) {
    return this.evetCommunityDevelopmentService.create(createEvetCommunityDevelopmentDto);
  }

  @Get()
  findAll() {
    return this.evetCommunityDevelopmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evetCommunityDevelopmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvetCommunityDevelopmentDto: UpdateEvetCommunityDevelopmentDto) {
    return this.evetCommunityDevelopmentService.update(+id, updateEvetCommunityDevelopmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evetCommunityDevelopmentService.remove(+id);
  }
}
